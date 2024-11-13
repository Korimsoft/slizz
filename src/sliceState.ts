import {ObjectMap} from 'korimsoft-tyfun';

export type SliceState<T> = {
    byId: ObjectMap<T>;
    allIds: string[];
};