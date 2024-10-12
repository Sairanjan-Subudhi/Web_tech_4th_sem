const express = require('express');
const app = express();
app.get('/calculate', (req, res) => {

    const { operation, num1, num2 } = req.query;
    const operand1 = parseFloat(num1);
    const operand2 = parseFloat(num2);
    let result;
    switch(operation) {
        case 'add':
            result = operand1 + operand2;
            break;
        case 'subtract':
            result = operand1 - operand2;
            break;
        case 'multiply':
            result = operand1 * operand2;
            break;
        case 'divide':
            if (operand2 === 0) {
                return res.status(400).send('Cannot divide by zero');
            }
            result = operand1 / operand2;
            break;
        default:
            return res.status(400).send('Invalid operation');
    }
    res.status(200).send(`Result: ${result}`);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
