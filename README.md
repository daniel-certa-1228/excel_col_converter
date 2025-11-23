# Excel Column Converter 📊

A simple JavaScript utility for converting between Excel column letters (e.g., A, AA, XFD) and their corresponding column numbers (e.g., 1, 27, 16384).

The core conversion logic is separated into its own file to allow for easy unit testing and clean separation from the front-end code.

---

## 🚀 Project Structure

The project uses two different module systems based on the environment:

| File Name | Purpose | Web Deployment Module | Node.js Test Module |
| :--- | :--- | :--- | :--- |
| **`conversions.js`** | Core conversion logic. | **ES Modules** (`export`) | **CommonJS** (`module.exports`) |
| **`app.js`** | DOM manipulation/event handlers (Browser). | **ES Modules** (`import`) | N/A |
| **`test.js`** | Unit testing script (Node.js CLI). | N/A | **CommonJS** (`require`) |

---

## 🛠️ **IMPORTANT: Switching `conversions.js` for Testing**

Since the Node.js test environment uses **CommonJS** and your web app uses **ES Modules**, you must ensure `conversions.js` has the correct export syntax before running tests.

### 1. **Testing Version (Use this for `node test.js`)**

To run the tests, your `conversions.js` file must use `module.exports`:

```javascript
// conversions.js (COMMONJS VERSION for Testing)

function numberToLetters(num) { /* ... */ }
function lettersToNumber(letters) { /* ... */ }

// Export statement for Node.js:
module.exports = {
    numberToLetters,
    lettersToNumber
};