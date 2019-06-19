function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click',distanceConverter);

    function distanceConverter () {
        let inputDistance = document.getElementById('inputDistance').value;
        let inputUnit = document.getElementById('inputUnits').value;

        switch(inputUnit){
            case 'km':
                inputDistance *= 1000;
                break;
            case 'm':
                inputDistance *= 1;
                break;
            case 'cm':
                inputDistance *= 0.01;
                break;
            case 'mm':
                inputDistance *= 0.001;
                break;
            case 'mi':
                inputDistance *= 1609.34;
                break;
            case 'yrd':
                inputDistance *= 0.9144;
                break;
            case 'ft':
                inputDistance *= 0.3048;
                break;
            case 'in':
                inputDistance *= 0.0254;
                break;
        }

        let outputUnit = document.getElementById('outputUnits').value;
        let outputDistance = document.getElementById('outputDistance');

        switch(outputUnit){
            case 'km':
                inputDistance /= 1000;
                break;
            case 'm':
                    inputDistance /= 1;
                    break;
            case 'cm':
                inputDistance /= 0.01;
                break;
            case 'mm':
                inputDistance /= 0.001;
                break;
            case 'mi':
                inputDistance /= 1609.34;
                break;
            case 'yrd':
                inputDistance /= 0.9144;
                break;
            case 'ft':
                inputDistance /= 0.3048;
                break;
            case 'in':
                inputDistance /= 0.0254;
                break;
        }
        outputDistance.value = inputDistance;
    }
}