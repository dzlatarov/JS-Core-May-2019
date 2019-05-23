function solve(n,k){    
    let outputArray = [1]; 
    let kSequence = new Array(k).fill(0);

    for(let i = 0; i < n - 1; i++){                               
        for(let j = 0; j < k - 1; j++){
               kSequence[j] = kSequence[j + 1];      
        }
        
        kSequence[k - 1] = outputArray[outputArray.length - 1];
        let sum = kSequence.reduce((a,b) => a + b, 0); 
        outputArray.push(sum);
    }

    console.log(outputArray.join(' '));
}