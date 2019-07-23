const appId = 'kid_BJ_Ke8hZg';
const user = 'guest';
const password = 'pass';
const auth = {
    Authorization: 'Basic ' + btoa(`${user}:${password}`),
    'Content-type': 'application/json'
};

const getUrl = `https://baas.kinvey.com/appdata/${appId}/venues/`;
const postUrl = `https://baas.kinvey.com/rpc/${appId}/custom/calendar?query=`;

const elements = {
    inputVanueData: document.getElementById('venueDate'),
    venueButton: document.getElementById('getVenues'),
    venues: document.getElementById('venue-info')
};

elements.venueButton.addEventListener('click', getVenue);

function getVenue() {
    const url = postUrl + elements.inputVanueData.value;
    let id = '';

    fetch(url, {
            method: 'POST',
            headers: auth
        })
        .then(handler)
        .then(data => {
            data.forEach(id => getInfoForVenue(id))
        });

    elements.venues.addEventListener('click', event => {
        const button = event.target;

        if (button.value === 'More info') {
            const venue = button.parentNode.parentNode;
            venue.getElementsByClassName('venue-details')[0].style.display = 'block';
            id = venue.getAttribute('id');

            let selectElement = venue.getElementsByClassName('quantity')[0];
            let ticketCount = selectElement.options[selectElement.selectedIndex].value;
            let purchaseBtn = venue.getElementsByClassName('purchase')[0];
            purchaseBtn.addEventListener('click', () => {
                elements.venues.innerHTML = purchase(venue, ticketCount);

                let purchaseInfo = document.getElementsByClassName('purchase-info')[0];
                let comfirmBtn = purchaseInfo.getElementsByTagName('input')[0];
                comfirmBtn.addEventListener('click', comfirmation(id, ticketCount));

            });
        }
    })
}

function getInfoForVenue(id) {
    const url = getUrl + `${id}`;

    fetch(url, {
            method: 'GET',
            headers: auth
        })
        .then(handler)
        .then(data => {
            let div = document.createElement('div');
            div.innerHTML = appendVenue(data);
            elements.venues.appendChild(div);
        });
}

function appendVenue(venue) {
    let innerText = `
    <div class="venue" id= '${venue._id}'>
        <span class="venue-name"><input class="info" type="button" value="More info">${venue.name}</span>
        <div class="venue-details" style="display: none;">
            <table>
                <tr>
                    <th>Ticket Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
                <tr>
                    <td class="venue-price">${venue.price} lv</td>
                    <td><select class="quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select></td>
                    <td><input class="purchase" type="button" value="Purchase"></td>
                </tr>
            </table>
        <span class="head">Venue description:</span>
        <p class="description">${venue.description}</p>
        <p class="description">Starting time: ${venue.startingHour}</p>
    </div>`;

    return innerText;
}

function purchase(venue, ticketCount) {
    let name = venue.getElementsByClassName('venue-name')[0].textContent;
    let price = parseInt(venue.getElementsByClassName('venue-price')[0].textContent);
    let innerText = `
    <span class="head">Confirm purchase</span>
    <div class="purchase-info">
        <span>${name}</span>
        <span>${Number(ticketCount)} x ${price}</span>
        <span>Total: ${Number(ticketCount) * price} lv</span>
        <input type="button" value="Confirm">
    </div> -->`;

    return innerText;
}

function comfirmation(id, ticketCount) {
    let url = `https://baas.kinvey.com/rpc/${appId}/custom/purchase?venue=${id}&qty=${ticketCount}`;

    fetch(url, {
            method: 'POST',
            headers: auth
        })
        .then(handler)
        .then(data => {
            elements.venues.innerHTML = `
            <p>You may print this page as your ticket.</p>
            ${data.html}`;
        });
}

function handler(response) {
    if (response >= 400) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
}