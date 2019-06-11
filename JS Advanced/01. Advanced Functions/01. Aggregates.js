function solve(arrayOfNumbers){
   let sum = arrayOfNumbers.reduce((a,b) => a + b, 0);
   console.log(`Sum = ${sum}`);

   let smallestValue = arrayOfNumbers.reduce((a,b) => Math.min(a,b));
   console.log(`Min = ${smallestValue}`);

   let biggestValue = arrayOfNumbers.reduce((a,b) => Math.max(a,b));
   console.log(`Max = ${biggestValue}`);

   let productOfNumbers = arrayOfNumbers.reduce((a,b) => a * b);
   console.log(`Product = ${productOfNumbers}`);

   let concatenatedNumbers = arrayOfNumbers.reduce((a,b) => '' + a + b);
   console.log(`Join = ${concatenatedNumbers}`);
}