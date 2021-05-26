import { formatLcdsToLines } from './formatLcdsToLines';

describe('formatLcdsToLines', () => {
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
});