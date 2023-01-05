/*
 This file will have functions that are used to update the state.
*/
import { INCREMENT, DECREMENT} from './countActionTypes'

export const incrementCounter = () => {
    return { type: INCREMENT}
}
export const decrementCounter = () => ({ type: DECREMENT})