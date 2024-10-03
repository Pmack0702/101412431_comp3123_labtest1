function lowerCaseWords(inputArray) {// Takes array as a parameter
    // Check if the input is an array
    if (!Array.isArray(inputArray)) {
        return 'Input should be an array';
    }

    const result = inputArray
        .filter(item => typeof item === 'string') // Used filter to Keep only string elements
        .map(item => item.toLowerCase()); // Convert each string to lowercase

    return result; // Return the resulting array of lowercase
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
console.log(lowerCaseWords(mixedArray)); 
