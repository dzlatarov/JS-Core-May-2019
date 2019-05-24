/**
 * 
 * @param {Array} array 
 */
function solve(array){
    let numberOfRotation = Number(array.pop());

    for(let i= 0; i < numberOfRotation % array.length; i++){
        let lastElement = array.pop();
        array.unshift(lastElement); 
    }

    console.log(array.join(' '));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);