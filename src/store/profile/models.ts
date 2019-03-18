export type livingExpense = {
    label: string,
    cost: number,
    id: string
}

export type Income = {
    value: number,
    period: Period
}

export default interface Profile {
    incomeA: Income,
    incomeB: Income,
    livingExpenses: livingExpense[]
}