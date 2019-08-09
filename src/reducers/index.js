import { combineReducers } from 'redux'
import channels from './channels'
import user from './user'

export default combineReducers({
  channels,
  user
})
