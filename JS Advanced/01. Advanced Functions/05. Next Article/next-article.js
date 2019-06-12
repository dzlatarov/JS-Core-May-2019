function getArticleGenerator(input){   
	let content = document.getElementById('content'); 

	return function(){
		if(input.length > 0){
			let paragraph = document.createElement('p');
			paragraph.innerHTML = input.shift();

			let article = document.createElement('article');
			article.appendChild(paragraph);

			content.appendChild(article);
		}
	}
}