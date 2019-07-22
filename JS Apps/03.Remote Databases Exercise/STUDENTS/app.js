const tbody = document.querySelector('tbody');

const userName = 'guest';
const userPassword = 'guest';
const appKey = 'kid_SJ4hShWfH';
const appSecret = '2adaac4df5c0473ea776d232608aeb48';

window.addEventListener('load', uploadStudents);

function uploadStudents() {
    const url = `https://baas.kinvey.com/appdata/${appKey}/students`;

    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken')
    };

    fetch(url, headers)
        .then(handler)
        .then(data => {
            data.sort((a,b) => {
                return a.ID - b.ID
            });

            data.forEach((s) => {
                let id = s.ID;
                let firstName = s.FirstName;
                let lastName = s.LastName;
                let facultyNumber = s.FacultyNumber;
                let grade = s.Grade;

                let trElement = createTrElement([id, firstName, lastName, facultyNumber, grade]);
                tbody.appendChild(trElement);
            })
        });        
}

function createTrElement(elements){
    let tr = document.createElement('tr');

    elements.forEach(info => {
        let thElement = document.createElement('th');
        thElement.textContent = info;
        tr.appendChild(thElement);
    })

    return tr;
}

function handler(response){
    if(response.status >= 400){
        throw new Error(`Error: ${response.status}`)
    }

    return response.json();
}