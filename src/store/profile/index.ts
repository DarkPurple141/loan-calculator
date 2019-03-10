import ProfileState from './models'
import * as actions from './action-types'

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
        case actions.SET_PROFILE:
            return {
                ...state,
                ...data
            }
        case actions.ADD_EXPENSE:
            const { label, cost } = data as any
            if (state.livingExpenses.find(
                ({ label: existingLabel }) => existingLabel === label))
                return {
                    ...state
                }
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .concat({
                        label,
                        cost
                    })
            }
        case actions.DELETE_EXPENSE:
            const { key: toDelete } = data as any
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .filter(({ label }) => toDelete !== label)
            }

        case actions.UPDATE_EXPENSE:
            const [key, value] = Object.entries(data)[0]
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .map((item) => {
                        if (item.label === key) {
                            item.cost = (value as number)
                        }
                        return item
                    })
            }

        default: return state
    }
}