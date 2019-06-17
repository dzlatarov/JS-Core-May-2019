function attachGradientEvents() {
    let gradientDivElement = document.getElementById('gradient');
    gradientDivElement.addEventListener('mousemove',gradientFunc);
    gradientDivElement.addEventListener('mouseout',gradientOutFunc);
    let resultElement = document.getElementById('result');

    function gradientFunc (event){
        let offset = event.offsetX / (event.target.clientWidth - 1);
        offset = Math.trunc(offset * 100);
        resultElement.textContent = `${offset}%`;               
    }

    function gradientOutFunc (){
        resultElement.textContent = '';
    }
}