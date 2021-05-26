export function splitIntegerToDigits(integer) {


    // 42
    
    return integer.toString().split('').map(digit => parseInt(digit, 10));
}
