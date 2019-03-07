export const SET_PROFILE = 'SET_PROFILE'

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
