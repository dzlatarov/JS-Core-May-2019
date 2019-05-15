function main(first, second, third){
    let theLargestNumber = 0;

    if(first > second && first > third){
        theLargestNumber = first;
    }   
    else if(second > first && second > third){
        theLargestNumber = second;
    }
    else if(third > first && third > second){
        theLargestNumber = third;
    }

    console.log(`The largest number is ` + theLargestNumber +'.');
}