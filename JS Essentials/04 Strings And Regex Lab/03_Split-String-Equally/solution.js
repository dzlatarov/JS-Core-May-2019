function solve() {
    let text = document.getElementById('text').value;
    let number = parseInt(document.getElementById('number').value);
    let result = document.getElementById('result');

    function splitEqualy(text, number){
        let arr = [];
        let indexCounter = 0;

        if(text.length % number !== 0){
            let len = text.length;
            let symbolCount = 0;

            while(len % number !== 0){
                len %= number;
                len++;
                symbolCount++;
            }
            
            for(let i= 0; i< symbolCount; i++){
                text += text[indexCounter];
                indexCounter++;
            }            
        }

        for(let i= 0; i < text.length; i+= number){
            arr.push(text.substr(i,number));            
        }

        result.innerHTML = arr.join(' ');
    }
    splitEqualy(text,number);
}