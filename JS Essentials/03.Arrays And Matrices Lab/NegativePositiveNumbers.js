function solve(array) {
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        if(array[i] < 0){
            sortedArray.unshift(array[i]);
        } else {
            sortedArray.push(array[i]);
        }
    }

    for(let element of sortedArray){
        console.log(element);
    }
}
solve([7, -2, 8, 9]);