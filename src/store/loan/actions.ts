import LoanState from './models'

export const SET_LOAN = 'SET_LOAN'

// action creators
export const setLoan = (newState: LoanState): ReduxAction => ({
    type: SET_LOAN,
    payload: newState
})
