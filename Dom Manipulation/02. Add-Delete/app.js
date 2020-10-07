function addItem() {
    let input = document.getElementById('newText');
    let parrentElement = document.getElementById('items');
    let liElement = document.createElement('li');

    liElement.innerHTML = input.value;
    liElement.addEventListener('click', deleteItem);
    
    let deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', "#");
    deleteLink.innerHTML = '[Delete]';
    
    liElement.appendChild(deleteLink);
    parrentElement.appendChild(liElement);
    input.value = '';
    



    function deleteItem(e) {
        let parrentElement = document.getElementById('items');
        let target = e.target.parentNode;
        console.log(target);
        // let liElement = document.getElementsByTagName('li');
        // console.log(liElement);
        parrentElement.removeChild(target);
    
    }
    
}