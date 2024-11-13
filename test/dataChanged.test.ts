import {SliceState} from '../src';
import {ObjectMap} from 'korimsoft-tyfun';
import {dataChanged} from '../src/dataChanged';
import {PayloadAction} from '@reduxjs/toolkit';

describe('A dataChanged reducer', () => {
    it('Should insert an item that does not exist', () =>{
        const initialState = givenInitialState();
        const dispatehedItem: TestingData = {
            id: 'testid-1',
            prop1: 'something'
        }

        const newState = dataChanged(initialState, aPayloadAction(dispatehedItem));

        expect(newState).toEqual({
            byId: {
                'testid-1': {
                    id: 'testid-1',
                    prop1: 'something'
                }
            },
            allIds: ['testid-1'],
        });
    });

    it('Should update an existing item', () => {
        const initialItem = {
            id: 'testid-1',
            prop1: 'something'
        }
        const initialState = givenInitialState(initialItem);

        const changedItem = {
            ...initialItem,
            prop1: 'else'
        }

        const newState = dataChanged(initialState, aPayloadAction(changedItem));

        expect(newState).toEqual({
            byId: {
                'testid-1': {
                    id: 'testid-1',
                    prop1: 'else'
                }
            },
            allIds: ['testid-1'],
        });

    })

    it('Should not change state when the dispatched item is the same', () => {

    });

    it('Should not change state when the dispatched item is null', () => {
        const initialItem = {
            id: 'testid-1',
            prop1: 'something'
        }
        const initialState = givenInitialState(initialItem);

        const newState = dataChanged(initialState, aPayloadAction(null as unknown as TestingData));

        expect(newState).toEqual({
            byId: {
                'testid-1': {
                    id: 'testid-1',
                    prop1: 'something'
                }
            },
            allIds: ['testid-1'],
        });
    });
})

type TestingData = {
    id: string,
    prop1: string,
}

function aPayloadAction(payload: TestingData): PayloadAction<TestingData> {
    return {
        type: 'test',
        payload

    }
}

function givenInitialState(...initialValues: TestingData[]): SliceState<TestingData> {
    const byId = initialValues.reduce((accumulator: ObjectMap<TestingData>, current) => {
        accumulator[current.id] = current;
        return accumulator;
    }, {})
    return {
        byId,
        allIds: initialValues?.map(item => item.id) ?? []
    }
}