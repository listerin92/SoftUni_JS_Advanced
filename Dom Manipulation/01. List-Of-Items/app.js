function addItem() {
    let input = document.getElementById('newItemText');
    let parrentElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.innerHTML = input.value;
    parrentElement.appendChild(liElement);
    input.value = '';
    

}