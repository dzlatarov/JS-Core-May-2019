function solve(input){
    let textToUpper = input.toUpperCase();
    let regex = /\w+/g;
    let words = textToUpper.match(regex);        

    console.log(words.join(', '));
}