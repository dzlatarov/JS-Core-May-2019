function lockedProfile() {
    let profilesElements = Array.from(document.getElementsByClassName('profile'));

    profilesElements.forEach(profile => {
        let button = profile.getElementsByTagName('button')[0];
        button.addEventListener('click',showMore);
    });

    function showMore () {
        let profileElement = this.parentNode;
        let unlockElement = profileElement.getElementsByTagName('input')[1];
        let button = profileElement.getElementsByTagName('button')[0];
        let lockedInfo = profileElement.children[9];

        if(unlockElement.checked && button.textContent === 'Show more'){
            lockedInfo.style.display = 'block';
            button.textContent = 'Hide it';
        } else if(unlockElement.checked && button.textContent === 'Hide it'){
            lockedInfo.style.display = 'none';
            button.textContent = 'Show more';
        }        
    }
}