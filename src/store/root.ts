import { combineReducers } from 'redux'
import profile from './profile'
import loan from './loan'
import costs from './costs'

export interface AppStore {
    loan: typeof loan,
    costs: typeof costs,
    profile: typeof profile
}

export default combineReducers({ loan, costs, profile })