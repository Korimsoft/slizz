import {Mapper} from 'korimsoft-tyfun';

export type PayloadObject<TOut> = {
    payload: TOut
}

export function aPayloadObject<TOut>(payload: TOut) {
    return { payload }
}

export function payloadObjectCreator<TOriginal, TStored>(mapper: Mapper<TOriginal, TStored>): (originalItem: TOriginal) => PayloadObject<TStored> {
    return (originalItem: TOriginal) => aPayloadObject(mapper(originalItem));
}