export const SET_LOAN = 'SET_LOAN'
import { LoanActionPayload } from './models'

export const setLoan = ({
    value,
    key
}: LoanActionPayload): ReduxAction => ({
    type: SET_LOAN,
    data: {
        [key]: value
    }
})
