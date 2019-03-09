import * as actions from './action-types'
import { ReduxAction } from '../../types.lib'

export const setLoan = ({
    value,
    key
}: ActionPayload): ReduxAction => ({
    type: actions.SET_LOAN,
    data: {
        [key]: value
    }
})
