import * as actions from './action-types'
import LoanState, { REPAYMENT_TYPE } from './models'

const initialState: LoanState = {
    amount: 0,
    period: 25,
    repaymentType: REPAYMENT_TYPE.PRINCIPAL_AND_INTEREST,
    repaymentFrequency: 'Fortnightly',
    rate: 3,
}

export default function (
    state: LoanState = initialState,
    action: ReduxAction
): LoanState 
{
    const { type, data } = action

    // safety
    if (!(type in actions))
        return state

    const { key, value } = data

    switch (type) {
        case actions.SET_LOAN: 
            return {
                ...state,
                [key]: value
            }
        default:
            return state
    }
}