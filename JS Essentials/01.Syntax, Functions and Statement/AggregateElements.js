function solve(array){    
    let sumOfArray = array.reduce(function(a,b){return a+b;}); 
    let inverseSum = 0;
    for(let i = 0; i < array.length; i++){
        inverseSum += (1 / array[i]);
    }   
    let concatElements = array.join('');

    console.log(sumOfArray); 
    console.log(inverseSum);
    console.log(concatElements);   
}