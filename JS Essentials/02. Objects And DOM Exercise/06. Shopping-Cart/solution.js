function solve() {     
   let buttons = document.getElementsByTagName('button');
   let productNames = [];
   let totalCost = 0;
   let result = '';

   for(let i = 0; i < buttons.length - 1; i++){
      buttons[i].addEventListener('click',function () {
         clickAdd(i)
      });             
   }   

   function clickAdd(i) {
      let productTitles = document.getElementsByClassName('product-title')[i].textContent;
      if(!productNames.some(n => n === productTitles)){
         productNames.push(productTitles);
      }

      let price = +document.getElementsByClassName('product-line-price')[i].textContent;
      totalCost += price;

      result += `Added ${productTitles} for ${price.toFixed(2)} to the cart.\n`;
      let textArea = document.getElementsByTagName('textarea')[0];
      textArea.value = result;
   }

   let checkOutButton = document.getElementsByClassName('checkout')[0];
   checkOutButton.addEventListener('click',clickEvent);
  
   function clickEvent(){
      result += `You bought ${productNames.join(', ')} for ${totalCost.toFixed(2)}.`;
      let textArea = document.getElementsByTagName('textarea')[0];
      textArea.value = result;

      for(let button of buttons){
         button.disabled = true;
      }
   }         
}