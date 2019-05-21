function solve() {
  let firstCheckBox = document.getElementsByTagName('td')[4];
  firstCheckBox.innerHTML =`<input type="checkbox">`;

  let generateButton = document.getElementsByTagName('button')[0];
  generateButton.addEventListener('click',generate);

  function generate(){
    let objects = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    objects.forEach(function (object) { generator(object) } );
  }

  function generator(object){
    let trElement = document.createElement('tr');
    let tdImgElement = document.createElement('td');
    tdImgElement.innerHTML = `<img src= "${object.img}">`;  
    
    document.getElementsByTagName('tbody')[0].appendChild(trElement);
    trElement.appendChild(tdImgElement);

    let tdNameElement = document.createElement('td');
    let pNameElement = document.createElement('p');

    pNameElement.textContent = object.name;
    tdNameElement.appendChild(pNameElement);
    trElement.appendChild(tdNameElement);

    let tdPriceElement = document.createElement('td');
    let pPriceElement = document.createElement('p');

    pPriceElement.textContent = object.price;
    tdPriceElement.appendChild(pPriceElement);
    trElement.appendChild(tdPriceElement);

    let tdDecFactorElement = document.createElement('td');
    let pDecFactorElement = document.createElement('p');

    pDecFactorElement.textContent = object.decFactor;
    tdDecFactorElement.appendChild(pDecFactorElement);
    trElement.appendChild(tdDecFactorElement);

    let tdCheckBoxElement = document.createElement('td');
    tdCheckBoxElement.innerHTML = `<input type="checkbox">`;
    trElement.appendChild(tdCheckBoxElement);
  }

  let buyButton = document.getElementsByTagName('button')[1];
  buyButton.addEventListener('click',buy);

  function buy(){
    let boughtFurnitures = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    let count = 0;

    let trElements = Array.from(document.getElementsByTagName('tr'));

    for(let i = 1; i < trElements.length; i++){
      if(trElements[i].children[4].children[0].checked){
        count+= 1;
        boughtFurnitures.push(trElements[i].children[1].textContent.trim());
        totalPrice += +trElements[i].children[2].textContent;
        avgDecFactor += +trElements[i].children[3].textContent;        
      }
    }

    avgDecFactor /= count;

    let output = document.getElementsByTagName('textarea')[1];
    output.value = `Bought furniture: ${boughtFurnitures.join(', ')}\n`+
    `Total price: ${totalPrice.toFixed(2)}\n` +
    `Average decoration factor: ${avgDecFactor}`;
  }
}