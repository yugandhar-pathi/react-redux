/*
    This file will have functions to read from the store.
*/
import { createSelector } from 'reselect'

const selectItemState = (state) => state.item;

export const selectItemName = createSelector(
    selectItemState, state => state.itemName 
)

export const selectItemPrice = createSelector(
    selectItemState, state => state.itemPrice 
)