function solve() {
    let baseUrl = `https://judgetests.firebaseio.com/schedule/`;
    let currentStopId = {
        name: 'depot',
        next: 'depot'
    };

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoBox = document.getElementById('info');

    function depart() {
       let url = baseUrl + currentStopId.next + '.json';
       

       fetch(url)
       .then(request => request.json())
       .then(data => changeId(data));
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${currentStopId.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    function changeId(data) {
        currentStopId.name = data.name;
        currentStopId.next = data.next;

        infoBox.textContent = `Next stop ${currentStopId.name}`;
        arriveBtn.disabled = false;
        departBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();