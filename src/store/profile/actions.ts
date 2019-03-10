import * as actions from './action-types'
import { ActionCreator } from 'redux';

// action creators
export const updateIncome: ActionCreator<ReduxAction> = ({
    value,
    key
}: ActionPayload): ReduxAction => ({
    type: actions.SET_PROFILE,
    data: {
        [key]: value
    }
})

export const addExpense: ActionCreator<ReduxAction> = ({
    key,
    value
}: ActionPayload): ReduxAction => ({
    type: actions.ADD_EXPENSE,
    data: {
        label: key,
        cost: value
    }
})

export const updateExpense: ActionCreator<ReduxAction> = ({
    key,
    value
}: ActionPayload): ReduxAction => ({
    type: actions.UPDATE_EXPENSE,
    data: {
        [key]: value
    }
})

export const deleteExpense: ActionCreator<ReduxAction> = ({
    key,
}: ActionPayload): ReduxAction => ({
    type: actions.DELETE_EXPENSE,
    data: {
        key
    }
})
