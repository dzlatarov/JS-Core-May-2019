function solve() {
   let firstPlayerDivElement = document.getElementById('player1Div');
   let firstPlayerCardElements = firstPlayerDivElement.getElementsByTagName('img'); 
   
   let secondPlayerDivElement = document.getElementById('player2Div');
   let secondPlayerCardElements = secondPlayerDivElement.getElementsByTagName('img');

   let result = document.getElementById('result');
   let history = document.getElementById('history');

   let firstPlayerSpanElement = result.children[0];
   let secondPlayerSpanElement = result.children[2];

   let firstPlayerCardValue = -1;
   let secondPlayerCardValue = -1;

   let firstPlayerCard = null;
   let secondPlayerCard = null;
   
   for(let first of firstPlayerCardElements){
      first.addEventListener('click',clickEvent);
   }

   
   for(let second of secondPlayerCardElements){
      second.addEventListener('click', clickEvent);
   }

          
  function clickEvent(){   
      this.src = 'images/whiteCard.jpg';
      if(this.parentNode == firstPlayerDivElement){
         firstPlayerSpanElement.textContent = Number(firstPlayerSpanElement.textContent) + Number(this.name);
         firstPlayerCardValue = Number(this.name);
         firstPlayerCard = this;
      } else if(this.parentNode == secondPlayerDivElement){
         secondPlayerSpanElement.textContent = Number(secondPlayerSpanElement.textContent) + Number(this.name);
         secondPlayerCardValue = Number(this.name);
         secondPlayerCard = this;
      }

      if(firstPlayerCardValue != -1 && secondPlayerCardValue != -1){
         compareCards(firstPlayerCard, secondPlayerCard);
      }

         function compareCards(firstPlayerCard, secondPlayerCard){
               if(firstPlayerCardValue != -1 && secondPlayerCardValue != -1){
                  if(firstPlayerCardValue > secondPlayerCardValue){
                     firstPlayerCard.style.border = '2px solid green';
                     secondPlayerCard.style.border = '2px solid red';         
                  } else if(secondPlayerCardValue > firstPlayerCardValue){
                     firstPlayerCard.style.border = '2px solid red';
                     secondPlayerCard.style.border = '2px solid green';
               }

               history.textContent += (`[${firstPlayerCardValue} vs ${secondPlayerCardValue}] `);

               setTimeout(() => {
                  firstPlayerSpanElement.textContent = '';
                  secondPlayerSpanElement.textContent = '';
               }, 2000);
            }

            firstPlayerCardValue = -1;
            secondPlayerCardValue = -1;                 
      }      
   }
}