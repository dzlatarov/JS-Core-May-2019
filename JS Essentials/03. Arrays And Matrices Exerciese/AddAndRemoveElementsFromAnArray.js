function solve(commands){
    let myArray = [];
    let firstElement = 1;   

    for(let command of commands){
        if(command === 'add'){
            myArray.push(firstElement);
            firstElement++;
        } else if(command === 'remove'){
            myArray.pop();
            firstElement++;
        }
    }

    if(myArray.length === 0){
        console.log('Empty')
    } else {
        for(let element of myArray){
            console.log(element);
        }
    }
}