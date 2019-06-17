function attachEventsListeners() {
    let daysElement = document.getElementById('days');            
    let hoursElement = document.getElementById('hours');    
    let minutesElement = document.getElementById('minutes');    
    let secondsElement = document.getElementById('seconds');
    
    let daysBtn = document.getElementById('daysBtn').addEventListener('click',daysConverter);
    let hoursBtn = document.getElementById('hoursBtn').addEventListener('click',hoursConverter);
    let minutesBtn = document.getElementById('minutesBtn').addEventListener('click',minutesConverter);
    let secondsBtn = document.getElementById('secondsBtn').addEventListener('click',secondsConverter);

    function daysConverter () {
        let days = document.getElementById('days').value;
        daysElement.value = days;
        hoursElement.value = days * 24;
        minutesElement.value = days * 1440;
        secondsElement.value = days * 86400;
    }

    function hoursConverter () {
        let hours = document.getElementById('hours').value;
        let days = hours / 24;
        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = days * 1440;
        secondsElement.value = days * 86400;
    }

    function minutesConverter () {
        let minutes = document.getElementById('minutes').value;
        let hours = minutes / 60; 
        let days = hours / 24;
        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = days * 86400;
    }

    function secondsConverter () {
        let seconds = document.getElementById('seconds').value;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        daysElement.value = days;
        hoursElement.value = hours;
        minutesElement.value = minutes;
        secondsElement.value = seconds;
    }
}