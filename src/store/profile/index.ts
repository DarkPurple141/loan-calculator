import ProfileState from './models'
import { SET_PROFILE } from './actions'

const initialState: ProfileState = {
    incomeA: {
        value: 0,
        period: "Monthly"
    },
    incomeB: {
        value: 0,
        period: "Monthly"
    },
    livingExpenses: [{
        label: 'daycare',
        cost: 100
    }]
}

export default function (
    state: ProfileState = initialState,
    action: ReduxAction
): ProfileState {
    const { type, data } = action

    switch (type) {
        case SET_PROFILE:
            return {
                ...state,
                ...data
            }

        default: return state
    }
}