function solve() {
    let inputArray = JSON.parse(document.getElementById('array').value);
    let spanResult = document.getElementById('result');

    let specialKey = inputArray[0];
    let pattern = new RegExp(`(?:^|\\s)(?:${specialKey})\\s+([A-Z!%$#]{8,})(?:\.|,|\\s|$)`,'gi');

    function replaceSymbols(word){
        while(word.indexOf('!') !== -1){
            word = word.replace('!', 1);
        }

        while(word.indexOf('%') !== -1){
            word = word.replace('%', 2);
        }

        while(word.indexOf('#') !== -1){
            word = word.replace('#', 3);
        }

        while(word.indexOf('$') !== -1){
            word = word.replace('$', 4);
        }

        return word.toLowerCase();
    }

    for(let i= 1; i < inputArray.length; i++){
        let current = inputArray[i];

        while(true){
            let match = pattern.exec(current);

            if(match == null){
                break;
            } else if(match[1].toUpperCase() === match[1]){
                let matchToReplace = replaceSymbols(match[1]);
                current = current.replace(match[1], matchToReplace);
            }
        }

        let p = document.createElement('p');
        p.innerHTML = current;
        spanResult.appendChild(p);
    }   
}
