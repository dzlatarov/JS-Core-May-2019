function solve(array){
    let currentBiggest = Number.MIN_SAFE_INTEGER;

    for(let i= 0; i < array.length; i++){
        if(array[i] >= currentBiggest){
            currentBiggest = array[i];
            console.log(currentBiggest);
        }
    }
}