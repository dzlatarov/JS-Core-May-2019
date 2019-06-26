( function () {
    let id = 0;

    class Extensible {
        constructor () {
            this.id = id++;
        }

        extend (template) {
            for(let property in template) {
                if(typeof template[property] === 'function'){
                    Extensible.prototype[property] = template[property];
                } else {
                    this[property] = template[property];
                }
            }
        }
    }
    
    return Extensible;
})()