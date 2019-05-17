function solve() {
   document.getElementById('send').addEventListener('click',clickEvent);
   let inputContent = document.getElementById('chat_input');
   let chatMessagesElement = document.getElementById('chat_messages');

   function clickEvent(){
      let createDivElement = document.createElement('div');
      createDivElement.textContent = inputContent.value;      
      createDivElement.setAttribute('class', 'message my-message');
      chatMessagesElement.appendChild(createDivElement);      
      inputContent.value = '';
   }
}

