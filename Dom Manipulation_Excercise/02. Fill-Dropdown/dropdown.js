function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    
    optionElement.textContent = text.value;
    optionElement.value = value.value;
    //optionElement.id = 'menu';
    
    let parrentOptionElement = document.getElementById('menu');
    parrentOptionElement.appendChild(optionElement);
    text.value = '';
    value.value = '';
    let item = document.getElementsByTagName('option');
    console.log(item);
    console.log(item.textContent);
    console.log(item.value);
}