function firstCalculator() {
    const firstNumber = document.getElementById('firstValue').value;
    const operator = document.getElementById('secondValue').value;
    const secondNumber = document.getElementById('thirdValue').value;

    switch (operator) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
        case '%':
            console.log(firstNumber % secondNumber);
            break;
        default:
            console.log('Incorrect input');
            break;
    };
};

function secondCalculator() {
    const firstNumber = document.getElementById('fourthValue').value;
    const operator = document.getElementById('fifthValue').value;
    const secondNumber = document.getElementById('sixthValue').value;
    if (operator === '√') {
        console.log(Math.pow(firstNumber, 1/secondNumber));
    } else {
        console.log(eval(firstNumber + operator + secondNumber));
    }
};