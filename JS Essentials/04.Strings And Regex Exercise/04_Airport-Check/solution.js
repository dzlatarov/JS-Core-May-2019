function solve() {
    let input = document.getElementById('string').value.split(', ');
    let result = document.getElementById('result');

    let namePattern = new RegExp(` (([A-Z]([A-Za-z]*)?)(-[A-Z][A-Za-z]*\\.)?-([A-Z][A-Za-z]*)?) `,'g');
    let airportPattern = new RegExp(' ([A-Z]{3}\\/[A-Z]{3}) ','g');
    let flightPattern = new RegExp(' ([A-Z]{1,3}[0-9]{1,5}) ','g');
    let companyPattern = new RegExp('- ([A-Z)([A-Za-z]*\\*[A-Z][A-Za-z]*) ','g');

    let text = input[0];
    let informationToPrint = input[1];

    let nameMatch = namePattern.exec(text)[1].toString().replace(/\-/g,' ');       
    let airportMatch = airportPattern.exec(text)[1].toString().split('/');
    let from = airportMatch[0];
    let to = airportMatch[1];
    let flightMatch = flightPattern.exec(text)[1].toString();
    let companyMatch = companyPattern.exec(text)[1].toString().replace('*',' ');
    
    switch(informationToPrint){
        case 'name':
            result.textContent = `Mr/Ms, ${nameMatch}, have a nice flight!`;
            break;
        case 'flight':
            result.textContent = `Your flight number ${flightMatch} is from ${from} to ${to}.`;
            break;
        case 'company':
            result.textContent = `Have a nice flight with ${companyMatch}.`;
            break;
        case 'all':
            result.textContent = `Mr/Ms, ${nameMatch}, your flight number ${flightMatch} is from ${from} to ${to}. Have a nice flight with ${companyMatch}.`;
            break;                
    }   
}