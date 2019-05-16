/**
 * 
 * @param {Array} input 
 */
function solve(input){
    let towns = [];
    let regex = /\s*\|\s*/;

    for(let i= 1; i < input.length; i++){
        let currentTown = {};
        let currentString = input[i].split(regex).filter(x => x);

        currentTown['Town'] = currentString[0];
        currentTown['Latitude'] = Number(currentString[1]);
        currentTown['Longitude'] = Number(currentString[2]);

        towns.push(currentTown);
    }

    let output = JSON.stringify(towns);
    console.log(output);
}