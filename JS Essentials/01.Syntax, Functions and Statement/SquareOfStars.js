function main(size){
    for (let i = 0; i < size; i++) {
        console.log('* '.repeat(size));      
    }

    if(size == ''){
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5));      
        }
    }
}