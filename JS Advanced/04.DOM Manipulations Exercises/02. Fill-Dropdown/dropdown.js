function addItem() {
    let inputText = document.getElementById('newItemText');
    let input = inputText.value;

    let inputValue = document.getElementById('newItemValue');
    let value = inputValue.value;

    let menuElement = document.getElementById('menu');

    let createOption = document.createElement('option');
    createOption.textContent = input;
    createOption.value = value;
    menuElement.appendChild(createOption);

    inputText.value = '';
    inputValue.value = '';
}