function getArticleGenerator(articles) {
    let divParent = document.getElementById('content');

    function showNext() {
        let article = document.createElement('article');
        article.textContent = articles.shift();
        divParent.appendChild(article);
    }

    return showNext;
}