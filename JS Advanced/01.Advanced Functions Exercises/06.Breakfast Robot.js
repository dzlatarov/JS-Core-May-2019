function solve(params){
    return (function () {
        const storage = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        };

        const recipes = {
            apple: {carbohydrate: 1, flavour: 2},
            lemonade: {carbohydrate: 10, flavour: 20},
            burger: {carbohydrate: 5, fat: 7, flavour: 3},
            eggs: {protein: 5, fat: 1, flavour: 1},
            turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
        }
        
        return input => {
            let [command, ...args] = input.split(' ');
            let message = '';

            if(command === 'restock'){
                let microelement = args[0];
                let quantity = Number(args[1]);

                storage[microelement] += quantity;
                message = 'Success';
            } else if(command === 'prepare'){
                let recipe = args[0];
                let quantity = Number(args[1]);

                let missingIngredient = Object.entries(recipes[recipe]).find(([name, neededQuantity]) => 
                storage[name] < neededQuantity * quantity)

                if(missingIngredient){
                    message = `Error: not enough ${missingIngredient[0]} in stock`
                } else {
                    for(let ingredient in recipes[recipe]){
                        storage[ingredient] -= recipes[recipe][ingredient] * quantity;
                    }

                    message = 'Success';
                }
            } else if(command === 'report'){
                message = `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
            }

            console.log(message);
            return message;
        }
    })()
}