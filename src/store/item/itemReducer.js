/*
 This file will have initial state and reducer function.
*/
import { SET_ITEM } from './itemActionTypes'

const initialState = {
    itemName: '',
    itemPrice: ''
}

export default function itemReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ITEM: {
            return { ...state, 
                      itemName : action.data.itemName, 
                      itemPrice : action.data.itemPrice
                    }
        }
        default:
            return state
    }
}

