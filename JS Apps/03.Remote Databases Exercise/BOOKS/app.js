const kinveyUsername = 'guest';
const kinveyPassword = 'guest';
const appKey = 'kid_SJ4hShWfH';
const appSecret = '2adaac4df5c0473ea776d232608aeb48';

const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/books`;

const elements = {
    loadAllBooks: document.getElementById('loadBooks'),
    addBtn: document.getElementById('submitBtn'),
    title: document.getElementById('title'),
    author: document.getElementById('author'),
    isbn: document.getElementById('isbn'),
    tbody: document.getElementById('books'),
    inputForm: document.getElementById('value-id'),
};

elements.loadAllBooks.addEventListener('click', loadBooks);
elements.addBtn.addEventListener('click', saveBook);


function saveBook(event) {
    event.preventDefault();

    const title = elements.title.value;
    const author = elements.author.value;
    const isbn = elements.isbn.value;

    if (title && author && isbn) {
        const book = {
            title,
            author,
            isbn
        };

        const headers = {
            method: elements.inputForm.value ? 'PUT' : 'POST',
            body: JSON.stringify(book),
            credentials: 'include',
            Authorization: 'Basic ' + btoa(`${kinveyUsername}:${kinveyPassword}`),
            headers: {
                'Content-type': 'application/json'
            }
        };

        const url = elements.inputForm.value ? `${baseUrl}/${elements.inputForm.value}` : baseUrl;

        fetch(url, headers)
            .then(handler)
            .then(loadBooks)
    }
}


function loadBooks() {
    document.getElementById('book-form').reset();
    elements.inputForm.value = null;

    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken')
    };

    fetch(baseUrl, headers)
        .then(handler)
        .then((data) => {
            elements.tbody.innerHTML = '';

            data.forEach(book => {
                let tr = document.createElement('tr');
                let tdTitle = document.createElement('td');
                let tdAuthor = document.createElement('td');
                let tdIsbn = document.createElement('td');
                let tdButtons = document.createElement('td');
                let editBtn = document.createElement('button');
                let deleteBtn = document.createElement('button');

                tr.setAttribute('class', 'book-container');
                tr.setAttribute('data-id', book._id);

                tdTitle.textContent = book.title;
                tdAuthor.textContent = book.author;
                tdIsbn.textContent = book.isbn;

                editBtn.textContent = 'Edit';
                deleteBtn.textContent = 'Delete';

                editBtn.addEventListener('click', updateBook);
                deleteBtn.addEventListener('click', deleteBook);

                tdButtons.appendChild(editBtn);
                tdButtons.appendChild(deleteBtn);

                tr.appendChild(tdTitle);
                tr.appendChild(tdAuthor);
                tr.appendChild(tdIsbn);
                tr.appendChild(tdButtons);

                elements.tbody.appendChild(tr);
            });
        })
}

function updateBook(event) {
    let book = findParent(event.target, 'book-container');
    let bookId = book.getAttribute('data-id');

    const url = `${baseUrl}/${bookId}`;

    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken')
    };

    fetch(url, headers)
        .then(handler)
        .then((data) => {
            elements.inputForm.value = data._id;

            elements.title.value = data.title;
            elements.author.value = data.author;
            elements.isbn.value = data.isbn;
        });
}

function deleteBook(event) {
    const book = findParent(event.target, 'book-container');
    const bookId = book.getAttribute('data-id');

    const url = `${baseUrl}/${bookId}`;

    const headers = {
        method: 'DELETE',
        credentials: 'include',
        Authorization: 'Basic ' + btoa(`${kinveyUsername}:${kinveyPassword}`),
        headers: {
            'Content-type': 'application/json'
        }
    };

    fetch(url, headers)
        .then(handler)
        .then((data) => {
            book.remove();
        });
}

function findParent(el, clazz) {
    // Traverse the DOM up with a while loop
    while (el.className != clazz) {
        // Increment the loop to the parent node
        el = el.parentNode;
        if (!el) {
            return null;
        }
    }
    // At this point, the while loop has stopped and `el` represents the element that has
    // the class you specified in the second parameter of the function `clazz`

    // Then return the matched element
    return el;
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(response.statusText);
    }

    return response.json();
}