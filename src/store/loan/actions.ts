import * as actions from './action-types'

export const setLoan = ({
    value,
    key
}: ActionPayload): ReduxAction => ({
    type: actions.SET_LOAN,
    data: {
        [key]: value
    }
})
