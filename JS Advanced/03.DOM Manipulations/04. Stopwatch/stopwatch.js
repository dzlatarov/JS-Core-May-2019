function stopwatch() {
    let timerElement = document.getElementById('time');    
    let counter;
    let minutes = 0;
    let seconds = 0;
    

    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click',start);
    stopBtn.addEventListener('click',stop);

    function start (){
        timerElement.textContent = '00:00';
        startBtn.disabled = true;
        stopBtn.disabled = false;

        counter = setInterval(() => {
            seconds++;

            if(seconds === 60){
                seconds = 0;
                minutes++;
            }

            let time = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
            time += seconds < 10 ? `0${seconds}` : `${seconds}`;
            timerElement.textContent = time;
        }, 1000);

    }

    function stop () {
        clearInterval(counter);
        startBtn.disabled = false;
        stopBtn.disabled = true;        
    }
}