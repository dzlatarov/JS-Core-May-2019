function solve(){
    let stats = [];

    for(let argument of arguments){
        let type = typeof(argument);
        console.log(`${type}: ${argument}`);

        if(!stats[type]){
            stats[type] = 1;
        } else {
            stats[type]++;
        }
    }

    let sorted = [];

    for(let type in stats){
        sorted.push([type, stats[type]]);
    }

    sorted.sort((a,b) => b[1] - a[1]);

    for(let type of sorted){
        console.log(`${type[0]} = ${type[1]}`);
    }
}
solve('cat', 42, function () { console.log('Hello world!'); });