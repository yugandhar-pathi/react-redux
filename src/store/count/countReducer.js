/*
 This file will have initial state and reducer function.
*/
import { INCREMENT, DECREMENT} from './countActionTypes'

const initialState = {
    counter: 0
}

export default function countReducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {...state, counter:  state.counter + 1 }
      case DECREMENT:
        return {...state, counter:  state.counter - 1 }
      default:
        return state
    }
  }