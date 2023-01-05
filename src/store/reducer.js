import { combineReducers } from 'redux'
import itemReducer from './item/itemReducer'
import countReducer from './count/countReducer'


export default combineReducers({
  item : itemReducer,
  counter : countReducer
})