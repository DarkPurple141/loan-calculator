export const SET_PROFILE = 'SET_PROFILE'
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE'

// action creators
export const setProfile = ({
    value,
    key
}: ActionPayload): ReduxAction => ({
    type: SET_PROFILE,
    data: {
        [key]: value
    }
})

export const updateExpense = ({
    key,
    value
}: ActionPayload): ReduxAction => ({
    type: UPDATE_EXPENSE,
    data: {
        [key]: value
    }
})
