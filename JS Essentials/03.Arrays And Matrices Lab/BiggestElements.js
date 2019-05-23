function solve(matrix){
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i< matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] > biggestElement){
                biggestElement = matrix[i][j];
            }
        }
    }

    console.log(biggestElement);
}