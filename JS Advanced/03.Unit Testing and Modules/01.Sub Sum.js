function subSum(array, startIndex, endIndex){
    if(!Array.isArray(array)){
        return NaN;
    }

    if(array.some(x => isNaN(x))){
        return NaN;
    }

    if(array.length === 0){
        return 0;
    }

    startIndex = Math.max(0, startIndex);
    endIndex = Math.min(array.length, endIndex + 1);
    let sum = array.slice(startIndex,endIndex).reduce((a,b) => a + b, 0);

    return sum;
}