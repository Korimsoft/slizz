import {identity, Mapper} from 'korimsoft-tyfun';
import {payloadObjectCreator} from '../src';

describe('payloadObjectCreator function', () => {
        it('Should create a payload object', () => {
            const mapper: Mapper<any, any> = identity<any>();
            const originalItem = { prop: 'Test'}
            const expectedPayloadObject = {payload: {...originalItem}}

            const payloadObjectCreatorFn = payloadObjectCreator(mapper);

            expect(payloadObjectCreatorFn(originalItem)).toEqual(expectedPayloadObject)

        });
})