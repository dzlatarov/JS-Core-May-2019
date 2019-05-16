/**
 * 
 * @param {Array} input 
 */
function solve(input){
    let towns = {};
    let splitPatter = ' <-> ';

    for(let i = 0; i < input.length; i++){
        let currentTownName = input[i].split(splitPatter);
        let townName = currentTownName[0];
        let population = Number(currentTownName[1]);

        if(!towns.hasOwnProperty(townName)){
            towns[townName] = 0;
            towns[townName] = population;
        } else {
            towns[townName] += population;
        }        
    }  
    
    for(let town of Object.entries(towns)){
        console.log(`${town[0]} : ${town[1]}`);
    }
}