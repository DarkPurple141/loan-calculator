import CostsState from './models'

export const SET_COSTS = 'SET_COSTS'

export function setCosts(newState: CostsState) {
    return {
        type: SET_COSTS,
        payload: newState
    }
}