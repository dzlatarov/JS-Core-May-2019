function attachEvents() {
    const url = 'https://judgetests.firebaseio.com/locations.json';

    const elements = {
        inputField: document.getElementById('location'),
        button: document.getElementById('submit'),
        current: document.getElementById('current'),
        upcoming: document.getElementById('upcoming'),
        forecast: document.getElementById('forecast')
    };

    const symbols = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    };

    elements.button.addEventListener('click', loadWeatherInfo);



    function loadWeatherInfo() {
        fetch(url)
            .then(handler)
            .then(loadLocationWeatherInfo);
    }

    function loadLocationWeatherInfo(data) {
        let location = data.filter((x) => x.name == elements.inputField.value)[0];

        fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
            .then(handler)
            .then((data) => showLocationWeatherInfo(data, location.code));
    }

    function showLocationWeatherInfo(data, code) {
        elements.forecast.style.display = 'block';

        let divForecast = createHTMLElement('div', 'forecasts');

        let symbol = symbols[data.forecast.condition.toLowerCase()];
        let spanSymbol = createHTMLElement('span', ['condition', 'symbol'], symbol);

        let spanHolder = createHTMLElement('span', 'condition');

        let spanLocationName = createHTMLElement('span', 'forecast-data', data.name);

        let degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
        let spanLocationDegrees = createHTMLElement('span', 'forecast-data', degrees);

        let spanLocationCondition = createHTMLElement('span', 'forecast-data', data.forecast.condition);

        spanHolder = appendChildToParent([spanLocationName, spanLocationDegrees, spanLocationCondition], spanHolder);

        divForecast = appendChildToParent([spanSymbol, spanHolder], divForecast);

        elements.current.appendChild(divForecast);

        loadUpcomingLocationWeatherInfo(code);
    }

    function loadUpcomingLocationWeatherInfo(code) {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(handler)
            .then(showUpcomingLocationWeatherInfo);
    }

    function showUpcomingLocationWeatherInfo(data) {        
        let divForecast = createHTMLElement('div','forecast-info');
      
        data.forecast.forEach((x) => {
            let spanHolder = createHTMLElement('span','upcoming');

            let symbol = symbols[x.condition.toLowerCase()] || symbols['partlySunny'];
            let spanSymbol = createHTMLElement('span','symbol',symbol);

            let degrees = `${x.low}${symbols.degrees}/${x.high}${symbols.degrees}`;
            let spanDegrees = createHTMLElement('span','forecast-data',degrees);

            let spanCondition = createHTMLElement('span','forecast-data',x.condition);

            divForecast.appendChild(appendChildToParent([spanSymbol, spanDegrees, spanCondition], spanHolder));            
        })

        elements.upcoming.appendChild(divForecast);
    }

    function createHTMLElement(tagName, className, textContent) {
        let currentElement = document.createElement(tagName);

        if (typeof className == 'string') {
            currentElement.classList.add(className);
        } else if (typeof className == 'object') {
            currentElement.classList.add(...className);
        }

        if (textContent) {
            currentElement.textContent = textContent;
        }

        return currentElement;
    }

    function appendChildToParent(children, parent) {
        children.forEach((child) => parent.appendChild(child));

        return parent;
    }

    function handler(response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        return response.json();
    }
}

attachEvents();