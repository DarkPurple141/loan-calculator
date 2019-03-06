import { combineReducers } from 'redux'
import profile from './profile'
import loan from './loan'
import costs from './costs'

export default combineReducers({ loan, costs, profile })