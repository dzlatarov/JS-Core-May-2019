/**
 * 
 * @param {Array} array 
 */
function solve(array){
    let smallestNumbers = [];

    for(let i= 0; i < 2; i++){
        let index = array.indexOf(Math.min(...array));
        let smallNumber = array.splice(index,1);
        smallestNumbers.push(smallNumber);        
    }

    console.log(smallestNumbers.join(' '));
}
solve([30, 15, 50, 5]);