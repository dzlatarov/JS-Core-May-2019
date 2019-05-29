function solve() {
    let word = document.getElementById('word').value;
    let textArray = JSON.parse(document.getElementById('text').value);
    let result = document.getElementById('result');

    function replaceWord(word, textArray){
        let wordToReplace = textArray[0].split(' ').filter(w => w !== '')[2];
        let regex = new RegExp(wordToReplace, 'gi');

        for(let sentence of textArray){
            sentence = sentence.replace(regex, word);
            let p = document.createElement('p');
            p.innerHTML = sentence;
            result.appendChild(p);
        }
    }
    replaceWord(word, textArray);
}