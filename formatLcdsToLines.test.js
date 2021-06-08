import { formatLcdsToLines } from './formatLcdsToLines';

describe('formatLcdsToLines', () => {

    test('format 3 to line representation', () => {
        expect(formatLcdsToLines([[
            ' _ ',
            ' _|',
            ' _|'
        ]])).toBe(" _ \n _|\n _|");
    });

    test('format 23 to line representation', () => {
        expect(formatLcdsToLines([[
            ' _ ',
            ' _|',
            '|_ '
        ], [
            ' _ ',
            ' _|',
            ' _|'
        ]])).toBe(" _  _ \n _| _|\n|_  _|");
    });

    test('format 123 to line representation', () => {
        expect(formatLcdsToLines([[
            '   ',
            '  |',
            '  |'
        ], [
            ' _ ',
            ' _|',
            '|_ '
        ], [
            ' _ ',
            ' _|',
            ' _|'
        ]])).toBe("    _  _ \n  | _| _|\n  ||_  _|");
    });

    test('format empty array to ?', () => {
        expect(formatLcdsToLines([])).toBe("\n\n");
    });

});