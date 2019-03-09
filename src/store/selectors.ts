import Costs from './costs/models'
import Profile from './profile/models'
import Loan, { REPAYMENT_FREQUENCY } from './loan/models'

export default interface State {
    costs: Costs,
    profile: Profile,
    loan: Loan
}

const sum = (acc: number, curr: number) => acc + Number(curr)
const multiplier = (p: Period): number => {
    let m: number

    switch (p) {
        case "Weekly": m = 52
        case "Fortnightly": m = 26
        case "Monthly": m = 12
        case "Yearly": default: m = 1
    }

    return m
}

export const getIncome = (profile: Profile): number => {
    const { incomeA, incomeB } = profile

    const annualisedIncomeA = incomeA.value * multiplier(incomeA.period)
    const annualisedIncomeB = incomeB.value * multiplier(incomeB.period)

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

    let n: number

    switch (repaymentFrequency) {
        case REPAYMENT_FREQUENCY.WEEKLY: n = 52;
        case REPAYMENT_FREQUENCY.FORTNIGHTLY: n = 26;
        case REPAYMENT_FREQUENCY.MONTHLY: n = 12;
        default: n = 12;
    }

    const periods = n * period
    const r = (rate / n)/100
    const exponent = Math.pow(1 + r, periods)

    return (amount * exponent * r) / (exponent - 1)
}

export const getSummary = ({ costs, profile, loan }: State): number => {

    const income         = getIncome(profile)
    const livingExpenses = getLivingExpenses(profile)
    const expectedCosts  = getCosts(costs)
    const loanCosts      = getLoanCosts(loan)

    return income - livingExpenses - expectedCosts - loanCosts
}