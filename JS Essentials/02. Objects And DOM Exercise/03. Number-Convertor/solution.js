function solve() {
     let selectMenuToElement = document.querySelector('#selectMenuTo'); 
     let binaryElement = document.createElement('option');
     let hexadecimalElement = document.createElement('option');                    
     binaryElement.value = 'binary';
     binaryElement.text = 'Binary';
     hexadecimalElement.value = 'hexadecimal';
     hexadecimalElement.text = 'Hexadecimal';
     selectMenuToElement.add(binaryElement);
     selectMenuToElement.add(hexadecimalElement);   

     document.getElementsByTagName('button')[0].addEventListener('click',clickEvent);
     
     function clickEvent(){
         let selectMenuToValue = document.getElementById('selectMenuTo').value;
         let inputValue = document.getElementById('input').value;
         let result = document.getElementById('result');

         if(selectMenuToValue === 'binary'){
             result.value = Number(inputValue).toString(2);
         } else if(selectMenuToValue === 'hexadecimal'){
             result.value = Number(inputValue).toString(16).toUpperCase();
         }
     }               
}