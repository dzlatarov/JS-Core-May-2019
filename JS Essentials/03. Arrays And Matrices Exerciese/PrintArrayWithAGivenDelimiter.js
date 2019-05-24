function solve(array){
    let delimiter = array[array.length - 1];
    array.pop();
    console.log(array.join(delimiter));
}