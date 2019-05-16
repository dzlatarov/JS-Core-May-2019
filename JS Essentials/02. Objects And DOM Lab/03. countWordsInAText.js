/**
 * 
 * @param {Array} input 
 */
function solve(input){    
    let pattern = /\w+/g; 
    let words = input[0].match(pattern);
    let wordsCount = {};

    for(let word of words){
        if(!wordsCount.hasOwnProperty(word)){
            wordsCount[word] = 0;
        } 
            wordsCount[word]++;        
    }

    let output = JSON.stringify(wordsCount);
    console.log(output);
}