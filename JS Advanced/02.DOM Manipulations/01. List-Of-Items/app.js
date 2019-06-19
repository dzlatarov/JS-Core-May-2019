function addItem() {
    let inputElement = document.getElementById('newItemText');
    let inputText = inputElement.value;

    let listElements = document.getElementById('items');
    let createLiElement = document.createElement('li');
    createLiElement.innerHTML = inputText;
    listElements.appendChild(createLiElement);
}