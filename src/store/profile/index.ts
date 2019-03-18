import ProfileState from './models'
import * as actions from './action-types'

const initialState: ProfileState = {
    incomeA: {
        value: 0,
        period: 'Monthly'
    },
    incomeB: {
        value: 0,
        period: 'Monthly'
    },
    livingExpenses: [{
        label: 'daycare',
        cost: 100,
        id: 'first'
    }]
}

export default function (
    state: ProfileState = initialState,
    action: ReduxAction
): ProfileState {
    const { type, data } = action

    // safety
    if (!(type in actions))
        return state

    const { key, value, id } = data

    switch (type) {
        case actions.SET_PROFILE:
            return {
                ...state,
                [key]: {
                    period: 'Monthly',
                    value
                }
            }
        case actions.ADD_EXPENSE:
            // for duplicate keys
            if (state.livingExpenses.find(
                ({ label: existingLabel }) => existingLabel === key))
                return {
                    ...state
                }
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .concat({
                        label: key,
                        cost: value!,
                        id: String(Date.now())
                    })
            }
        case actions.DELETE_EXPENSE:
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .filter(({ id: idToFind }) => id !== idToFind)
            }

        case actions.UPDATE_EXPENSE:
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .map(item => {
                        if (item.id === id) {
                            item.cost = value!
                        }
                        return item
                    })
            }

        case actions.UPDATE_EXPENSE_KEY:
            console.info('here', key, id, value)
            return {
                ...state,
                livingExpenses: state.livingExpenses
                    .map(item => {
                        if (item.id === id) {
                            item.label = key
                        }
                        return item
                    })
            }

        default: return state
    }
}