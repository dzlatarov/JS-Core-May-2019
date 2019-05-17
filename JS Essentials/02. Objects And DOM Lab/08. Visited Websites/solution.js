function solve() {       
    let tagElements = document.getElementsByTagName('a');

    for(let tag of tagElements){
      tag.addEventListener('click',clickEvent);
    }

    function clickEvent(){
      let textElement = this.parentNode.children[1];
      let siteText = textElement.textContent;
      let number = Number(siteText.match(/\d+/g));
      siteText =`Visited: ${number + 1} times`;
      textElement.textContent = siteText;
    }   
}