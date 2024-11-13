import {isNil, ObjectWithId} from 'korimsoft-tyfun';
import {SliceState} from './sliceState';
import {PayloadAction} from '@reduxjs/toolkit';

export function dataChanged<T extends ObjectWithId>(state: SliceState<T>, action: PayloadAction<T>): SliceState<T> {
    const item = action.payload as T;
    if(isNil(item)) {
        return state;
    }

    if(!state.allIds.find(id => id === item.id)) {
        state.allIds.push(item.id);
    }

    state.byId[item.id] = item;

    return state;
}