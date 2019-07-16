function attachEvents() {
    clearPhoneBook();

    const loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click',loadFunc);

    const createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click',createFunc);

    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    function loadFunc() {
        clearPhoneBook();

        fetch(url)
        .then(request => request.json())
        .then(data => {
            const contacts = Object.values(data);

            for(const contact of contacts){
                const name = contact.person;
                const phoneNumber = contact.phone;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                const li = document.createElement('li');
                li.textContent = `${name}: ${phoneNumber} `;
                li.appendChild(deleteBtn);

                document.getElementById('phonebook').appendChild(li);

                deleteBtn.addEventListener('click', (e) => {
                    const currentContact = e.target.parentNode;
                    const contactInfo = currentContact.textContent.split(' ').filter(x => x !== '');

                    const name = contactInfo[0];
                    const number = contactInfo[1];
                    let searchedId = '';

                    const contactsIds = Object.keys(data);

                    for(const id of contactsIds){
                        if(data[id].person === name && data[id].phone === number){
                            searchedId = id;
                            break;
                        }
                    }

                    currentContact.remove();

                    const idUrl = 'https://phonebook-nakov.firebaseio.com/phonebook' +
                    '/' + searchedId + '.json';

                    fetch(idUrl, {
                        method: 'delete',
                        body: JSON.stringify(searchedId)
                    })
                        .then(resolve => resolve.json());
                });
            }
        });
    }

    function createFunc() {
        clearPhoneBook();

        const name = document.getElementById('person');
        const number = document.getElementById('phone');

        if(name.value && number.value){
            let currentPerson = {
                person: name.value,
                phone: number.value
            };
            
            fetch(url, {
                method: 'post',
                body: JSON.stringify(currentPerson)
            })
                .then(res => res.json());            
        }

        loadFunc();

        name.value = '';
        number.value = '';
    }

    function clearPhoneBook() {
        document.getElementById('phonebook').innerHTML = '';
    }
}

attachEvents();