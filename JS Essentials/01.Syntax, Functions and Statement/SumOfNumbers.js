function main(n,m){
    let sum = 0;

    for (let index = Number(n); index <= Number(m); index++) {
        sum += index;
    }

    console.log(sum);
}