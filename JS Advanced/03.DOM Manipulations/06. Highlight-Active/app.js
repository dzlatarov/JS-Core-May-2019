function focus() {
    let inputElements = document.getElementsByTagName('input');

    Array.from(inputElements).forEach(el => el.addEventListener('focus',focusFunc));
    Array.from(inputElements).forEach(el => el.addEventListener('blur',blurFunc));

    function focusFunc (event){
        let input = event.target;
        input.parentNode.setAttribute('class','focused');        
    }

    function blurFunc (event){
        let input = event.target;
        input.parentNode.removeAttribute('class');
    }
}