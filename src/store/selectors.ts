import Costs from './costs/models'
import Profile from './profile/models'
import Loan from './loan/models'

export default interface State {
    costs: Costs,
    profile: Profile,
    loan: Loan
}

const sum = (acc: number, curr: number) => acc + Number(curr)
const multiplier = (p: Period): number => {
    let m: number

    switch (p) {
        case 'Weekly': m = 52; break;
        case 'Fortnightly': m = 26; break;
        case 'Monthly': m = 12; break;
        case 'Yearly': default: m = 1;
    }

    return m
}

// HOF that accepts a period and returns a function that does the correct multiple
const adjustToYearlyValue = (p: Period) => (value: number) => value * multiplier(p)

export const getIncome = (profile: Profile): number => {
    const { incomeA, incomeB } = profile

    const annualisedIncomeA = adjustToYearlyValue(incomeA.period)(incomeA.value)
    const annualisedIncomeB = adjustToYearlyValue(incomeB.period)(incomeB.value)

    return annualisedIncomeA + annualisedIncomeB
}

export const getLivingExpenses = (profile: Profile): number => {
    const expenses = profile.livingExpenses || []
    return expenses
        .map(({ cost }) => cost)
        .reduce(sum, 0)
}

export const getCosts = (costs: Costs): number => {
    return Object.values(costs)
        .reduce(sum, 0)
}

export const getLoanCosts = (loan: Loan) => {
    const { period, amount, rate, repaymentFrequency } = loan

    const n = multiplier(repaymentFrequency)

    const periods = n * period
    const r = (rate / n)/100
    const exponent = Math.pow(1 + r, periods)

    return (amount * exponent * r) / (exponent - 1)
}

export const getSummary = ({ costs, profile, loan }: State): number => {

    const income         = getIncome(profile)
    const livingExpenses = adjustToYearlyValue('Weekly')(getLivingExpenses(profile))
    const expectedCosts  = getCosts(costs)
    const loanCosts      = adjustToYearlyValue(loan.repaymentFrequency)(getLoanCosts(loan))

    return income - livingExpenses - expectedCosts - loanCosts
}