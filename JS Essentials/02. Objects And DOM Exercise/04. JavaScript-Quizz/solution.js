function solve() {     
    let idElements = document.getElementById('quizzie').children;
    let idNumber = 1;
    let playerPoints = 0;
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

    let options = document.getElementsByTagName('p');

    for (let option of options){
      option.addEventListener('click',clickEvent);
    }    

    function clickEvent(){
      if(this.textContent === correctAnswers[idNumber - 1]){
        playerPoints++;        
      }

      if(idNumber === idElements.length - 2){
        let h1Element = document.getElementsByTagName('h1')[1];

        if(playerPoints === idElements.length - 2){
          h1Element.textContent = 'You are recognized as top JavaScript fan!';
        } else {
          h1Element.textContent = `You have ${playerPoints} right answers`;
        }
      }

      idElements[idNumber].style.display = 'none';
      idElements[idNumber + 1].style.display = 'block';
      idNumber++;
    }    
}
