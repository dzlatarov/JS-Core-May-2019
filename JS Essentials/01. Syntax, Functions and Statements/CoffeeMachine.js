/**
 * 
 * @param {Array} input 
 */
function solve(input){
    let incomeReport = 0;

    for(let i = 0; i < input.length; i++){

        let order = input[i].split(', ');
        let money = Number(order.shift());
        let typeOfDrink = order.shift();

        let price = 0;

        if(typeOfDrink == 'coffee'){

            let typeOfCoffee = order.shift();
            if(typeOfCoffee == 'caffeine'){
                price = 0.80;
            } else if(typeOfCoffee == 'decaf'){
                price = 0.90;
            }
        } else if(typeOfDrink == 'tea'){
            price = 0.80;
        }

        let addingMilkOrOnlySugar = order.shift();

        if(addingMilkOrOnlySugar == 'milk'){
            let milkCost = Math.round(price) * 0.1;
            price += milkCost;             
            addingMilkOrOnlySugar = order.shift();
        }    
        
        if(addingMilkOrOnlySugar > 0){
            price += 0.1;
        }


        if(money >= price){
            incomeReport += price;
            console.log(`You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${(money - price).toFixed(2)}`);
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need $${(price - money).toFixed(2)} more.`);
        }
    }

    console.log(`Income Report: $${incomeReport.toFixed(2)}`);
}