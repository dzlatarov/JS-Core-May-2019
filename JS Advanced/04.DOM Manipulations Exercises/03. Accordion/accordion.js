function toggle() {
    let btnElement = document.getElementsByClassName('button')[0];
    let displayStyleElement = document.getElementById('extra');

    if(displayStyleElement.style.display === 'none'){
        displayStyleElement.style.display = 'block';
        btnElement.textContent = 'Less';
    } else {
        displayStyleElement.style.display = 'none';
        btnElement.textContent = 'More';
    }
}