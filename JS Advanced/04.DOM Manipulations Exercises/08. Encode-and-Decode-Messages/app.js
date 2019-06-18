function encodeAndDecodeMessages() {        
   let inputMessage = document.getElementsByTagName('textarea')[0];
   let receiverMessage = document.getElementsByTagName('textarea')[1];

   let sentButton = document.getElementsByTagName('button')[0];
   sentButton.addEventListener('click',sentFunc);
   
   let receiveBtn = document.getElementsByTagName('button')[1];
   receiveBtn.addEventListener('click',receiveFunc);

   function sentFunc () {
        let message = inputMessage.value;
        let encodedMessage = '';

        for(let i= 0; i< message.length; i++){
            let char = message[i].charCodeAt(0) + 1;
            encodedMessage += String.fromCharCode(char);
        }
        
        inputMessage.value = '';
        receiverMessage.value = encodedMessage;
   }

   function receiveFunc () {
        let message = receiverMessage.value;
        let decodedMessage = '';

        for(let i= 0; i< message.length; i++){
            let char = message[i].charCodeAt(0) - 1;
            decodedMessage += String.fromCharCode(char);
        }

        receiverMessage.value = decodedMessage;
   }
}