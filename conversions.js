// Function to convert column number to letters
function numberToLetters(num) {
    let result = '';
    while (num > 0) {
        const remainder = (num - 1) % 26;
        result = String.fromCharCode(65 + remainder) + result;
        num = Math.floor((num - 1) / 26);
    }
    return result;
}

// Function to convert column letters to number
function lettersToNumber(letters) {
    let result = 0;
    for (let i = 0; i < letters.length; i++) {
        const char = letters[i].toUpperCase();
        // Base 26 calculation: A=1, B=2, ..., Z=26
        result = result * 26 + (char.charCodeAt(0) - 65 + 1);
    }
    return result;
}

// *** CRITICAL CHANGE: Use CommonJS export for Node.js ***
module.exports = {
    numberToLetters,
    lettersToNumber
};