function main(elements){
    let speed = Number(elements[0]);
    let area = elements[1];    

    if(area == 'motorway'){
        if(speed > 130){
            let oveSpeed = speed - 130;
            if(oveSpeed <= 20){
                console.log('speeding');  
            }
            else if(oveSpeed > 20 && oveSpeed <= 40){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving');
            }            
        }
    }
    else if(area == 'interstate'){
        if(speed > 90){
            let overSpeed = speed - 90;
            if(overSpeed <= 20){
                console.log('speeding');
            }
            else if(overSpeed > 20 && overSpeed <= 40){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving');
            }
        }
    }
    else if(area == 'city'){
        if(speed > 50){
            let overSpeed = speed - 50;
            if(overSpeed <= 20){
                console.log('speeding');
            }
            else if(overSpeed > 20 && overSpeed <= 40){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving');
            }
        }
    }
    else if(area == 'residential'){
        if(speed > 20){
            let overSpeed = speed - 20;
            if(overSpeed <= 20){
                console.log('speeding');
            }
            else if(overSpeed > 20 && overSpeed <= 40){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving');
            }
        }
    }    
}