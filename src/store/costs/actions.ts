import * as actions from './action-types'

export const setCosts = (data: ActionPayload): ReduxAction => ({
    type: actions.SET_COSTS,
    data
})