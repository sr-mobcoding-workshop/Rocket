import { digitToLcd } from './digitToLcd'

describe('digitToLcd', ()=>{
    test('convert 0 to lcd representation of 0', () => {
        expect(digitToLcd(0)).toEqual([' _ ', '| |', '|_|']);
    });
    
    test('convert 1 to lcd representation of 1', () => {
        expect(digitToLcd(1)).toEqual(['   ', '  |', '  |']);
    });
    
    test('convert 2 to lcd representation of 2', () => {
        expect(digitToLcd(2)).toEqual([' _ ', ' _|', '|_ ']);
    });

    test('convert 3 to lcd representation of 3', () => {
        expect(digitToLcd(3)).toEqual([' _ ', ' _|', ' _|']);
    });

    test('convert 4 to lcd representation of 4', () => {
        expect(digitToLcd(4)).toEqual(['   ', '|_|', '  |']);
    });

    test('convert 5 to lcd representation of 5', () => {
        expect(digitToLcd(5)).toEqual([' _ ', '|_ ', ' _|']);
    });

    test('convert 6 to lcd representation of 6', () => {
        expect(digitToLcd(6)).toEqual([' _ ', '|_ ', '|_|']);
    });

    test('convert 7 to lcd representation of 7', () => {
        expect(digitToLcd(7)).toEqual([' _ ', '  |', '  |']);
    });

    test('convert 8 to lcd representation of 8', () => {
        expect(digitToLcd(8)).toEqual([' _ ', '|_|', '|_|']);
    });

    test('convert 9 to lcd representation of 9', () => {
        expect(digitToLcd(9)).toEqual([' _ ', '|_|', ' _|']);
    });
})



// Example digits
 /*  
|
|


_
_|   =    ' _ ', ' _|', ' _|'
_|  
*/