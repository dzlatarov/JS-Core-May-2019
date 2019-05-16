/**
 * 
 * @param {Array} input 
 */
function solve(input){
    let towns = {};

    for(let i = 0; i < input.length; i += 2){        
        let townName = input[i];
        let income = Number(input[i + 1]);

        if(!towns.hasOwnProperty(townName)){
            towns[townName] = 0;
        }

        towns[townName] += income;
    }
    
    let output = JSON.stringify(towns);
    console.log(output);
}