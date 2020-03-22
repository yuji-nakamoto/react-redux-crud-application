//reducersを結合するための関数
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
