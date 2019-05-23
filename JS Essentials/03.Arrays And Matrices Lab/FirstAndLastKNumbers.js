function solve(input){
    let numberK = input.shift();
    let firstKElements = input.slice(0, numberK);
    let lastKElements = input.slice(-numberK);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}