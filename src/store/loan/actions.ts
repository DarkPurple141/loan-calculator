export const SET_LOAN = 'SET_LOAN'

export const setLoan = ({
    value,
    key
}: ActionPayload): ReduxAction => ({
    type: SET_LOAN,
    data: {
        [key]: value
    }
})
