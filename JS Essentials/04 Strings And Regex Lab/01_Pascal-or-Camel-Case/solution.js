function solve() { 
  let inputText = document.getElementById('text').value;  
  let namingConvention = document.getElementById('naming-convention').value; 

  function pascalOrCamelCase(inputText, namingConvention){
    let splitedText = inputText.toLowerCase().split(' ').filter(a => a !== '');
    let output = '';
    if (namingConvention === 'Pascal Case'){
      for (let word of splitedText) {
        if(word[0] !== word[0].toUpperCase()){
          word = word.replace(word[0], word[0].toUpperCase());
        }
        output += word;
      }     
    } else if(namingConvention === 'Camel Case'){
      for(let word of splitedText){
        if(word[0] !== word[0].toUpperCase()){
          word = word.replace(word[0], word[0].toUpperCase());
        }
        output += word;
      }
      output = output.replace(output[0], output[0].toLowerCase());
    } else {
      output = 'Error!';
    }
    document.getElementById('result').innerHTML = output;
  }   
  pascalOrCamelCase(inputText, namingConvention);
}