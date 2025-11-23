// Use Node.js built-in 'assert' module for simple testing
const assert = require('assert');

// Import the functions from your conversion file
const { numberToLetters, lettersToNumber } = require('./conversions');

console.log("--- Starting Unit Tests for Excel Column Conversion ---");

// --- Test Cases for numberToLetters ---
function testNumberToLetters() {
    console.log("\n## Testing numberToLetters()");

    // Basic single-letter columns
    assert.strictEqual(numberToLetters(1), 'A', 'Test 1 Failed: 1 should be A');
    assert.strictEqual(numberToLetters(26), 'Z', 'Test 2 Failed: 26 should be Z');
    
    // Two-letter columns (boundary tests)
    assert.strictEqual(numberToLetters(27), 'AA', 'Test 3 Failed: 27 should be AA');
    assert.strictEqual(numberToLetters(52), 'AZ', 'Test 4 Failed: 52 should be AZ'); // Z + 1 is AA
    assert.strictEqual(numberToLetters(702), 'ZZ', 'Test 5 Failed: 702 should be ZZ'); // (26*26) + (26*1) is 702
    
    // Three-letter columns (boundary tests)
    assert.strictEqual(numberToLetters(703), 'AAA', 'Test 6 Failed: 703 should be AAA');
    
    // Check a random column value
    assert.strictEqual(numberToLetters(100), 'CV', 'Test 7 Failed: 100 should be CV');
    
    // Test the maximum Excel column (16384)
    assert.strictEqual(numberToLetters(16384), 'XFD', 'Test 8 Failed: 16384 should be XFD');

    console.log("✅ numberToLetters() Tests Passed!");
}

// --- Test Cases for lettersToNumber ---
function testLettersToNumber() {
    console.log("\n## Testing lettersToNumber()");

    // Basic single-letter columns
    assert.strictEqual(lettersToNumber('A'), 1, 'Test 9 Failed: A should be 1');
    assert.strictEqual(lettersToNumber('Z'), 26, 'Test 10 Failed: Z should be 26');
    
    // Two-letter columns (boundary tests)
    assert.strictEqual(lettersToNumber('AA'), 27, 'Test 11 Failed: AA should be 27');
    assert.strictEqual(lettersToNumber('AZ'), 52, 'Test 12 Failed: AZ should be 52');
    assert.strictEqual(lettersToNumber('ZZ'), 702, 'Test 13 Failed: ZZ should be 702');
    
    // Three-letter columns (boundary tests)
    assert.strictEqual(lettersToNumber('AAA'), 703, 'Test 14 Failed: AAA should be 703');
    
    // Check a random column value
    assert.strictEqual(lettersToNumber('CV'), 100, 'Test 15 Failed: CV should be 100');
    
    // Test the maximum Excel column (XFD)
    assert.strictEqual(lettersToNumber('XFD'), 16384, 'Test 16 Failed: XFD should be 16384');
    
    // Test case insensitivity (since your function handles it)
    assert.strictEqual(lettersToNumber('cv'), 100, 'Test 17 Failed: lowercase cv should be 100');

    console.log("✅ lettersToNumber() Tests Passed!");
}

// --- Run All Tests ---
try {
    testNumberToLetters();
    testLettersToNumber();
    console.log("\n🥳 All Unit Tests Passed Successfully!");
} catch (error) {
    console.error("\n❌ A Unit Test Failed!");
    console.error(error.message);
    process.exit(1); // Exit with a non-zero code to indicate failure
}