import { SET_LOAN } from './actions'
import LoanState, {REPAYMENT_TYPE, REPAYMENT_FREQUENCY} from './models'

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
        case SET_LOAN: 
            return {
                ...action.payload
            }
        default:
            return state
    }
}