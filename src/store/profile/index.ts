
type livingExpense = {
    label: string,
    cost: number
}

interface Profile {
    income: number,
    livingExpenses?: livingExpense[]
}

const initialState: Profile = {
    income: 0,
}


export default function (state: Profile = initialState, action: ReduxAction) {
    const { type } = action

    switch (type) {
        default: return state
    }
}