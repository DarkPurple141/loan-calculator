export const SET_COSTS = 'SET_COSTS'

export const setCosts = ({
    value,
    key
}: ActionPayload): ReduxAction => ({
    type: SET_COSTS,
    data: {
        [key]: value
    }
})