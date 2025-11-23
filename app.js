// Import the functions from the separate conversions file
import { numberToLetters, lettersToNumber } from './conversions.js';

// Number input handler
const numberInput = document.getElementById('numberInput');
const numberResult = document.getElementById('numberResult');

numberInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    
    if (!e.target.value) {
        numberResult.textContent = 'Enter a number above';
        numberResult.className = 'result-empty';
        return;
    }

    // Excel column limits are 1 to 16384 (XFD)
    if (isNaN(value) || value < 1 || value > 16384) {
        numberResult.textContent = 'Please enter a number between 1 and 16,384';
        numberResult.className = 'error';
        return;
    }

    // *** Calling the imported function ***
    const letters = numberToLetters(value);
    numberResult.textContent = letters;
    numberResult.className = 'result-text';
});

// Letter input handler
const letterInput = document.getElementById('letterInput');
const letterResult = document.getElementById('letterResult');

letterInput.addEventListener('input', (e) => {
    let value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    e.target.value = value;

    if (!value) {
        letterResult.textContent = 'Enter letters above';
        letterResult.className = 'result-empty';
        return;
    }

    // *** Calling the imported function ***
    const number = lettersToNumber(value);

    // Excel column limits are 1 to 16384 (XFD)
    if (number < 1 || number > 16384) {
        letterResult.textContent = 'Invalid column (must be A-XFD)';
        letterResult.className = 'error';
        return;
    }

    letterResult.textContent = number;
    letterResult.className = 'result-text';
});