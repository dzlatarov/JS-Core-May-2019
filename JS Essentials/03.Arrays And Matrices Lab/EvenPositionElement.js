function solove(array) {
    let evenPositionElements = [];

    for (let i = 0; i < array.length; i++) {
        if(i % 2 == 0){
            evenPositionElements.push(array[i]);
        }        
    }
    console.log(evenPositionElements.join(' '));
}
solove(['JS']);
