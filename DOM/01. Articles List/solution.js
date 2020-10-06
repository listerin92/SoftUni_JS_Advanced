function createArticle() {

	//TODO...
	let titleInputElement = document.getElementById('createTitle');
	let contentInputElement = document.getElementById('createContent');

	let headingElement = document.createElement('h3');
	headingElement.innerHTML = titleInputElement.value;

	let contentElement = document.createElement('p');
	contentElement.innerHTML = contentInputElement.value;

	
	let articleElement = document.createElement('article');
	
	let articleSectionElement = document.getElementById('articles');
	
	
	if (titleInputElement.value !== '' && contentInputElement.value !== '') {
		
		articleElement.appendChild(headingElement);
		articleElement.appendChild(contentElement);
		
		articleSectionElement.appendChild(articleElement);

		// TODO… append the elements;

	} // clear the inputs;
	titleInputElement.value = '';
	contentInputElement.value = '';


}