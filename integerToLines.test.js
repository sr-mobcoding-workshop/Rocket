import { integerToLines } from "./integerToLines";

describe( "integerToLines", () => {

    test('format 3 to line representation', () => {
        expect(integerToLines(3)).toBe(" _ \n _|\n _|");
    });

} );