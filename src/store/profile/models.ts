type livingExpense = {
    label: string,
    cost: number
}

export default interface Profile {
    income: number,
    livingExpenses?: livingExpense[]
}