import {SET_AMOUNT, SET_PERIOD, SET_REPAYMENT} from './actions'
import {REPAYMENT_TYPE, REPAYMENT_FREQUENCY} from './loan'

interface LoanState {
    /* borrowing amount */
    amount: number,
    /* eg 30 years */
    period: number,
    /* as defined */
    repaymentType: REPAYMENT_TYPE,
    /* repayment frequency */
    repaymentFrequency: REPAYMENT_FREQUENCY,
    /* interest rate */
    rate: number,
}

const initialState: LoanState = {
    amount: 0,
    period: 0,
    repaymentType: REPAYMENT_TYPE.PRINCIPAL_AND_INTEREST,
    repaymentFrequency: REPAYMENT_FREQUENCY.FORTNIGHTLY,
    rate: 0,
}

export default function (state: LoanState = initialState, action: ReduxAction): LoanState {
    const { type } = action

    switch (type) {
        case SET_AMOUNT: 
            return {
                ...state,
                amount: action.payload
            }
        case SET_PERIOD:
            return {
                ...state,
                period: action.payload
            }
        case SET_REPAYMENT:
            return {
                ...state,
                repaymentType: action.payload
            }
        default:
            return state
    }
}