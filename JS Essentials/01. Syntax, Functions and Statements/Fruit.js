function solve(typeOfFruit, weight, pricePerKilo){
    let moneyToBuyFruit = (weight / 1000) * pricePerKilo;

    console.log(`I need $${moneyToBuyFruit.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${typeOfFruit}.`)
}