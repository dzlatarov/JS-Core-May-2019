function create(words) {
   let contentElement = document.getElementById('content');
   for(let word of words){
      let createDivElement = document.createElement('div');
      let paragraph = document.createElement('p');

      paragraph.textContent = word;
      createDivElement.appendChild(paragraph);
      paragraph.style.display = 'none';
      createDivElement.addEventListener('click',display);

      function display () {
         paragraph.style.display = 'block';
      }

      contentElement.appendChild(createDivElement);
   }
}