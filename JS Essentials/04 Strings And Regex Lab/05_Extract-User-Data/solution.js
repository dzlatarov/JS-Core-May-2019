function solve() {
    let data = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');

    function extractUserData(data){
        let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;
        let match;

        for(let info of data){
            match = pattern.exec(info);
            if(match){
                let pName = document.createElement('p');
                pName.textContent = `Name: ${match[1]}`;
                result.appendChild(pName);

                let pPhoneNumber = document.createElement('p');
                pPhoneNumber.textContent = `Phone Number: ${match[2]}`;
                result.appendChild(pPhoneNumber);

                let pEmail = document.createElement('p');
                pEmail.textContent = `Email: ${match[3]}`;
                result.appendChild(pEmail);
            } else {
                let pInvalidInput = document.createElement('p');
                pInvalidInput.textContent = 'Invalid data';
                result.appendChild(pInvalidInput);
            }

            let pDashes = document.createElement('p');
            pDashes.textContent = '- - -';
            result.appendChild(pDashes);
        }
    }
    extractUserData(data);
}