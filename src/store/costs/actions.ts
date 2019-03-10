import * as actions from './action-types'

export const setCosts = ({
    value,
    key
}: ActionPayload): ReduxAction => ({
    type: actions.SET_COSTS,
    data: {
        [key]: value
    }
})