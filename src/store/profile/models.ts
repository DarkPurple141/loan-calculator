type livingExpense = {
    label: string,
    cost: number
}

type Period = 'Weekly' | 'Fortnightly' | 'Monthly' | 'Yearly'

type Income = {
    value: number,
    period: Period
}

export default interface Profile {
    incomeA: Income,
    incomeB: Income,
    livingExpenses?: livingExpense[]
}