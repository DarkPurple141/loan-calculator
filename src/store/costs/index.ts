import PurchaseCosts from './models'
import { SET_COSTS } from './actions';

const initialState: PurchaseCosts = {
    conveyancing: 1500,
    bankFees: 500,
    renovations: 0,
    stampDuty: 0
}

export default function (state = initialState, action: ReduxAction) {
    const { type } = action

    switch (type) {
        case SET_COSTS:
            return {
                ...action.payload
            }
        default: 
            return state
    }
}