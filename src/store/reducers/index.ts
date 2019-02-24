import { combineReducers } from 'redux'
import profile from './profile'
import loan from './loan'
import upfrontCosts from './costs'

export default combineReducers({ loan, upfrontCosts, profile })