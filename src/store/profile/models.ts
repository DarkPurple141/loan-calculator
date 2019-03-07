type livingExpense = {
    label: string,
    cost: number
}

type Income = {
    value: number,
    period: Period
}

export default interface Profile {
    incomeA: Income,
    incomeB: Income,
    livingExpenses: livingExpense[]
}