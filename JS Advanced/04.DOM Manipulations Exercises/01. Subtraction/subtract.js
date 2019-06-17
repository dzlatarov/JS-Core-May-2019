function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let resultElement = document.getElementById('result');

    let result = firstNumber - secondNumber;
    resultElement.textContent = result;
}