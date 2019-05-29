function solve() {
  let input = document.getElementById('text').value;
  let result = document.getElementById('result');

  function findAsciiEquivalent(input){
    let output = '';
    let splitedInput = input.split(' ').filter(a => a !== '');

    for(let element of splitedInput){
      if(Number(element)){
        output += (String.fromCharCode(element));
      } else {
        let charArray = [];

        for(let i= 0; i < element.length; i++){
          charArray.push(element[i].charCodeAt(0));
        }

        let p = document.createElement('p');
        p.innerHTML = charArray.join(' ');
        result.appendChild(p);
      }
    }
    let p = document.createElement('p');
    p.innerHTML = output;
    result.appendChild(p);
  }

  findAsciiEquivalent(input);
}