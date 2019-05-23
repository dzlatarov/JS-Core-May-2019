/**
 * 
 * @param {Array} matrix 
 */
function solve(matrix){
    let leftSum = 0;
    let rightSum = 0;
    let sums = [];    

    for(let i = 0; i < matrix.length; i++){
        leftSum += matrix[i][i];
    }

    sums[0] = leftSum;

    for(let i = matrix.length - 1, j = 0; i >= 0; i--, j++){
        rightSum += matrix[j][i];
    }

    sums[1] = rightSum;    
    
    console.log(sums.join(' '));
}
solve([[20, 40],
    [10, 60]]
   );