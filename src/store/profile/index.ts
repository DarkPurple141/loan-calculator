import ProfileState from './models'
import { SET_PROFILE } from './actions'

const initialState: ProfileState = {
    income: 0,
}

export default function (
    state: ProfileState = initialState,
    action: ReduxAction
) {
    const { type } = action

    switch (type) {
        case SET_PROFILE:
            return {
                ...action.payload
            }

        default: return state
    }
}