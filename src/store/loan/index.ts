import * as actions from './action-types'
import LoanState, { REPAYMENT_TYPE, REPAYMENT_FREQUENCY } from './models'
import { ReduxAction } from '../../types.lib'

const initialState: LoanState = {
    amount: 0,
    period: 25,
    repaymentType: REPAYMENT_TYPE.PRINCIPAL_AND_INTEREST,
    repaymentFrequency: REPAYMENT_FREQUENCY.FORTNIGHTLY,
    rate: 3,
}

export default function (
    state: LoanState = initialState,
    action: ReduxAction
): LoanState 
{
    const { type, data } = action

    switch (type) {
        case actions.SET_LOAN: 
            return {
                ...state,
                ...data
            }
        default:
            return state
    }
}