import ProfileState from './models'

export const SET_PROFILE = 'SET_PROFILE'

// action creators
export const setProfile = (newState: ProfileState): ReduxAction => ({
    type: SET_PROFILE,
    data: newState
})
