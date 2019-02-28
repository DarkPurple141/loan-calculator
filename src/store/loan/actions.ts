import {REPAYMENT_TYPE, REPAYMENT_FREQUENCY} from './loan'

export const SET_AMOUNT = 'SET_AMOUNT'
export const SET_PERIOD = 'SET_PERIOD'
export const SET_REPAYMENT = 'SET_REPAYMENT'

// action creators
export const setAmount = (amount: number): ReduxAction => ({
    type: SET_AMOUNT,
    payload: amount
})

export const setPeriod = (period: number): ReduxAction => ({
    type: SET_PERIOD,
    payload: period
})

export const setRepaymentType = (repaymentType: REPAYMENT_TYPE) => ({
    type: SET_REPAYMENT,
    payload: repaymentType
})
