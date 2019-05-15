function main(elements){    
    function chop(startingNumber){
        return startingNumber / 2;
    }
    
    function dice(startingNumber){
        return Math.sqrt(startingNumber);
    }

    function spice(startingNumber){
        return startingNumber + 1;
    }

    function bake(startingNumber){
        return startingNumber * 3;
    }

    function fillet(startingNumber){
        return startingNumber - (startingNumber * 0.2);
    }

    let startingNumber = Number(elements[0]);
    let commands = elements.slice(1);
    
    for(let command of commands){
        switch(command){
            case 'chop': startingNumber = chop(startingNumber); break;
            case 'dice': startingNumber = dice(startingNumber); break;
            case 'spice': startingNumber = spice(startingNumber); break;
            case 'bake': startingNumber = bake(startingNumber); break;
            case 'fillet': startingNumber = fillet(startingNumber); break;
        }

        console.log(startingNumber);
    }
}