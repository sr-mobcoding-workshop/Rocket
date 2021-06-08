import { splitIntegerToDigits } from "./splitIntegerToDigits";
import { formatLcdsToLines } from "./formatLcdsToLines";
import { digitToLcd } from "./digitToLcd";
/**
 * 
 */
export function integerToLines( integer ) {
   const digits = splitIntegerToDigits(integer);
   const lcds = digits.map(digitToLcd);

   return formatLcdsToLines(lcds);
}