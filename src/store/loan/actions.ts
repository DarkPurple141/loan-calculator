import * as actions from './action-types'

export const setLoan = 
(data: ActionPayload): ReduxAction => ({
    type: actions.SET_LOAN,
    data
})
