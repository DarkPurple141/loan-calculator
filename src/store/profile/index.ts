import ProfileState from './models'
import { SET_PROFILE, UPDATE_EXPENSE } from './actions'

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
    console.info('here', data, type)

    switch (type) {
        case SET_PROFILE:
            return {
                ...state,
                ...data
            }
        case UPDATE_EXPENSE:
            const [key, value] = Object.entries(data)[0]
            console.info('here', key, value)
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .map(item => {
                        if (item.label === key) {
                            item.cost = value
                        }
                        return item
                    })
            }

        default: return state
    }
}