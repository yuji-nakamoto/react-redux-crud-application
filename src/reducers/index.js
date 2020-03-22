//reducersを結合するための関数
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
