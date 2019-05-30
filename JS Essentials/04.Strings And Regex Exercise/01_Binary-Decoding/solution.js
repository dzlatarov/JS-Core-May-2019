function solve() {
    let input = document.getElementById('input').value;
    let result = document.getElementById('resultOutput');    

    function getSum(input){
        let sum = 0;
        let result = input;

        while(result.length > 1){
            for(let char of result){
                sum += +char;
            }

            result = sum.toString();
            sum = 0;
        }

        return +result;
    }  
    
    function fromBinaryToChar(binary){
        let decimal = parseInt(binary,2);
        let char = String.fromCharCode(decimal);

        return char;
    }
    
    let sum = getSum(input);
    let slicedText = input.slice(sum, input.length - sum);
    
    
    let output = slicedText
    .split(/([\d]{8})/g)
    .filter(el => el)
    .map(x => fromBinaryToChar(x))
    .filter(el => /[a-zA-Z ]+/g.test(el))
    .join('');

    result.textContent = output;
}