import { splitIntegerToDigits } from './splitIntegerToDigits'

describe('splitIntegerToDigits', ()=>{

    test('the integer 12 should be split into its digits 1 and 2', () => {
        expect(splitIntegerToDigits(12)).toEqual([1, 2]);
    });

    test('the integer 42 should be split into its digits 4 and 2', () => {
        expect(splitIntegerToDigits(42)).toEqual([4, 2]);
    });

});