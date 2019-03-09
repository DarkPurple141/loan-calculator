import { ReduxAction } from '../../types.lib'
import PurchaseCosts from './models'
import * as actions from './action-types';

const initialState: PurchaseCosts = {
    conveyancing: 1500,
    bankFees: 500,
    renovations: 0,
    stampDuty: 0
}

export default function (
    state = initialState,
    action: ReduxAction
): PurchaseCosts {
    const { type, data } = action

    switch (type) {
        case actions.SET_COSTS:
            return {
                ...state,
                ...data
            }
        default: 
            return state
    }
}