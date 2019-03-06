import ProfileState from './models'
import { SET_PROFILE } from './actions'

const initialState: ProfileState = {
    income: 0,
}

export default function (
    state: ProfileState = initialState,
    action: ReduxAction
) {
    const { type, data } = action

    switch (type) {
        case SET_PROFILE:
            return {
                ...data
            }

        default: return state
    }
}