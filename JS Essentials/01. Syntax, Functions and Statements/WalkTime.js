function main(steps, footprint, studentSpeed){
    let distance = (steps * footprint) / 1000;
    let speedPerSecond = studentSpeed / 3600;

    let seconds = Math.round(distance / speedPerSecond);
    let minutes = Math.floor(steps * footprint / 500);
    let hours = 0;

    while(seconds >= 60){
        seconds -= 60;
        minutes++;
    }

    while(minutes >= 60){
        minutes -= 60;
        hours++;
    }

    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;

    console.log(`${hours}:${minutes}:${seconds}`);
}