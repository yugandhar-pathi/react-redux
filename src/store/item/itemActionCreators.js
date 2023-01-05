/*
 This file will have functions that are used to update the state.
*/
export const SET_ITEM = 'SET_ITEM'

export const setItem = (data) => {
    return { type: SET_ITEM, data }
}