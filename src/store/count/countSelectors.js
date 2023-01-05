/*
    This file will have functions to read from the store.
*/
import { createSelector } from 'reselect'

const selectCounterState = (state) => state.counter;

export const selectCounterValue = createSelector(
    selectCounterState, state => state.counter
)