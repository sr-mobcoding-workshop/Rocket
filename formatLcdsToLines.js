// TODO: Proceed here 

/**
 * formatLcdsToLines() concatenates lcds to a string
 * 
 * @param lcds an array of lcds
 * @return string concatenated lcd presentation
 */
export function formatLcdsToLines( lcds ) {
    return lcds.reduce( ( acc, value ) => {
        return [acc[0] + value[0], acc[1] + value[1], acc[2] + value[2]]
    }, ["", "", ""] ).join("\n");
}