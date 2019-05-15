function main(firstNumber, secondNumber){
    while(firstNumber != secondNumber){
        if(firstNumber > secondNumber){
            firstNumber -= secondNumber;
        }
        else if(secondNumber > firstNumber){
            secondNumber -= firstNumber;
        }
    }

    console.log(firstNumber);
}