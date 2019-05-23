function solve(array){
    let reversedArray = [];

    for(let i = 0; i < array.length; i++){
        if(i % 2 === 1){
            let doubled = array[i] * 2;
            reversedArray.push(doubled);
        }
    }

    console.log(reversedArray.reverse().join(' '));
}