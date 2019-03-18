import * as actions from './action-types'
import { ActionCreator } from 'redux';

// action creators
export const updateIncome: ActionCreator<ReduxAction> =
(data: ActionPayload): ReduxAction => ({
    type: actions.SET_PROFILE,
    data
})

export const addExpense: ActionCreator<ReduxAction> =
(data: ActionPayload): ReduxAction => ({
    type: actions.ADD_EXPENSE,
    data
})

export const updateExpenseLabel: ActionCreator<ReduxAction> =
(data: ActionPayload): ReduxAction => ({
    type: actions.UPDATE_EXPENSE_KEY,
    data
})

export const updateExpenseCost: ActionCreator<ReduxAction> =
(data: ActionPayload): ReduxAction => ({
    type: actions.UPDATE_EXPENSE,
    data
})

export const deleteExpense: ActionCreator<ReduxAction> =
(data: ActionPayload): ReduxAction => ({
    type: actions.DELETE_EXPENSE,
    data
})
