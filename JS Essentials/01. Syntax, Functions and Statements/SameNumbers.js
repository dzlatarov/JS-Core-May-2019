function main(number){
    let areSame = true;
    let sum = 0;

    for(let i = 0; i < number.toString().length; i++){
        if(number.toString()[0] != number.toString()[i]){
            areSame = false;
        }

        sum += Number(number.toString()[i]);
    }

    console.log(areSame);
    console.log(sum);
}