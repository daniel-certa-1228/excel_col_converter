# Excel Column Converter 📊

A simple JavaScript utility for converting between Excel column letters (e.g., A, AA, XFD) and their corresponding column numbers (e.g., 1, 27, 16384).

The core conversion logic is separated into its own file to allow for easy unit testing.

---

## 🚀 Project Structure

For testing and modularity, the project is organized into three main files:

| File Name | Purpose | Module System |
| :--- | :--- | :--- |
| **`conversions.js`** | Contains the core functions: `numberToLetters` and `lettersToNumber`. | CommonJS (`module.exports`) for Node.js testing. |
| **`test.js`** | Node.js script that loads and executes unit tests against the functions in `conversions.js`. | CommonJS (`require`). |
| **`app.js`** / **`index.html`** | (Your front-end files) Contains the DOM manipulation and event handlers for the web application. | ES Modules (`import/export`) for the browser. |

---

## 🧪 Unit Testing

The unit tests confirm that the conversion logic works correctly for various inputs, including single letters, boundary conditions (like 'Z' and 'AA'), and the maximum Excel column ('XFD').

### Prerequisites

You must have **Node.js** installed on your system to run the test script from the command line.

### How to Run Tests

1.  Ensure you have both **`conversions.js`** (with `module.exports`) and **`test.js`** in the same directory.
2.  Open your command line or terminal.
3.  Navigate to the directory where these files are saved.
4.  Execute the test script using the following command:

```bash
node test.js