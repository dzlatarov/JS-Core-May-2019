function deleteByEmail() {
    let inputElement = document.getElementsByName('email')[0];
    let input = inputElement.value;

    let resultElement = document.getElementById('result');
    let emails = [...document.querySelectorAll('table tr td:nth-child(2)')];
    let email = emails.find(td => td.textContent === input);
    
    if(email){       
        email.parentNode.remove();
        resultElement.textContent = 'Deleted.';
        inputElement.value = '';
    } else {
        resultElement.textContent = 'Not found.';
    }
}