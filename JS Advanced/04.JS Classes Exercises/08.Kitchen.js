class Kitchen {
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for(let product of products){
            let productInfo = product.split(' ');
            let productName = productInfo[0];
            let productQuantity = Number(productInfo[1]);
            let productPrice = Number(productInfo[2]);

            if(this.budget >= productPrice) {
                if(!this.productsInStock.hasOwnProperty(productName)){
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

       return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price){
        if(this.menu.hasOwnProperty(meal)){
            return `The ${meal} is already in our menu, try something different.`
        } 

        this.menu[meal] = {
            neededProducts,
            price: Number(price)
        };

        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu () {
        if(Object.keys(this.menu).length === 0) {
            return 'Our menu is not ready yet, please come later...';
        }            
        let result = '';
        for(let mealName of Object.keys(this.menu)){
            result += `${mealName} - $ ${this.menu[mealName].price}\n`;
        }

        return result;
    }

    makeTheOrder(mealName) {
        if(!this.menu.hasOwnProperty(mealName)){
            return `There is not ${mealName} yet in our menu, do you want to order something else?`;
        }

        let meal = this.menu[mealName];

        for(let neededProduct of meal.neededProducts) {
            let productInfo = neededProduct.split(' ');
            let productName = productInfo[0];
            let productQuantity = Number(productInfo[1]);

            if(!this.productsInStock.hasOwnProperty(productName) || this.productsInStock[productName] < productQuantity) {
                return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`
            }            
        }

        for(let neededProduct of meal.neededProducts){
            let productInfo = neededProduct.split(' ');
            let productName = productInfo[0];
            let productQuantity = Number(productInfo[1]);

            this.productsInStock[productName] -= productQuantity;
        }

        this.budget += meal.price;
        return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${meal.price}.`
    }
}