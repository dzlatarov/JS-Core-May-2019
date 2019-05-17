function solve() {
  let inputElement = document.getElementById('input');
  let textContent = inputElement.textContent;
  
  let ouputElement = document.getElementById('output');

  let sentences = textContent.split('.');

  while(sentences.length > 0){
    let array = [];

    for(let i = 0; i < 3; i++){
      array.push(sentences.shift());

      if(sentences.length == 0){
        break;
      }
    }
    
    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = array.join('. ');
    ouputElement.appendChild(paragraphElement);
  }  
}