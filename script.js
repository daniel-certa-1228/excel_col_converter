function numberToLetters(num) {
    let result = '';
    while (num > 0) {
        const remainder = (num - 1) % 26;
        result = String.fromCharCode(65 + remainder) + result;
        num = Math.floor((num - 1) / 26);
    }
    return result;
}

// Convert column letters to number
function lettersToNumber(letters) {
    let result = 0;
    for (let i = 0; i < letters.length; i++) {
        const char = letters[i].toUpperCase();
        result = result * 26 + (char.charCodeAt(0) - 65 + 1);
    }
    return result;
}

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

    if (isNaN(value) || value < 1 || value > 16384) {
        numberResult.textContent = 'Please enter a number between 1 and 16,384';
        numberResult.className = 'error';
        return;
    }

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

    const number = lettersToNumber(value);

    if (number < 1 || number > 16384) {
        letterResult.textContent = 'Invalid column (must be A-XFD)';
        letterResult.className = 'error';
        return;
    }

    letterResult.textContent = number;
    letterResult.className = 'result-text';
});