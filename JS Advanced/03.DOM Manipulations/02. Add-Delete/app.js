function addItem() {
    let inputElement = document.getElementById('newText');
    let inputText = inputElement.value;

    let listElements = document.getElementById('items');
    let createLiElement = document.createElement('li');
    createLiElement.innerHTML = inputText + ' ';
    listElements.appendChild(createLiElement);

    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click',deleteItem);
    createLiElement.appendChild(deleteLink);
    listElements.appendChild(createLiElement);

    function deleteItem(){
        let li = this.parentNode;
        let ul = document.getElementById('items');
        ul.removeChild(li);
        inputElement.value = '';
    }
}