function main(first, second, third){
    let sum = 0;
    let everageLength = 0;

    sum = first.length + second.length + third.length;
    everageLength = Math.floor(sum / 3);
    console.log(sum);
    console.log(everageLength);
}