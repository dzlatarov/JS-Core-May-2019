function createArticle() {	
	let createTitleElement = document.getElementById('createTitle');
	let createContentElement = document.getElementById('createContent');

	let titleValue = createTitleElement.value;
	let contentValue = createContentElement.value;

	if(titleValue && contentValue){
		let titleElement = document.createElement('h3');
		titleElement.textContent = titleValue;
	
		let contentElement = document.createElement('p');
		contentElement.textContent = contentValue;
	
		let articleElement = document.createElement('article');
		articleElement.appendChild(titleElement);
		articleElement.appendChild(contentElement);

		let articles = document.getElementById('articles');
		articles.appendChild(articleElement);

		createTitleElement.value = '';
		createContentElement.value = '';
	}	
}