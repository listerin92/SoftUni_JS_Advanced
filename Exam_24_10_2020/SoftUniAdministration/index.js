function solve() {
    let inputs = Array.from(document.querySelectorAll('.form-control'));
    let lectureName = inputs[0].children[1];
    let date = inputs[1].children[1];
    let moduleType = inputs[2].children[1];
    let addButton = inputs[3].children[0];
    addButton.addEventListener('click', addClicked);

    function addClicked(event) {
        if (!lectureName.value || !date.value || moduleType.value == 'Select module') {
            return;
        }
        event.preventDefault();
        console.log(inputs);
        console.log(lectureName.value);
        console.log(date.value);
        console.log(moduleType.value);

        let divIntrainingSection = Array.from(document.querySelectorAll(`.user-view > .modules`))[0];
        console.log(divIntrainingSection);

        let divEl = document.createElement('div');
        divEl.className = 'module';
        let h3El = document.createElement('h3');
        h3El.textContent = `${moduleType.value.toUpperCase()}-MODULE`;

        let ulEl = document.createElement('ul');
        let liEl = document.createElement('li');
        liEl.className = 'flex';
        let h4El = document.createElement('h4');
        let splitDate = date.value.split('T');
        let dateOnly = splitDate[0].split('-');
        h4El.textContent = `${lectureName.value} - ${dateOnly[0]}/${dateOnly[1]}/${dateOnly[2]} - ${splitDate[1]}`; //split string check TODO

        let buttonEl = document.createElement('button');
        buttonEl.className = 'red';
        buttonEl.textContent = 'Del';
        buttonEl.addEventListener('click', deleteButtonClicked);
        console.log(Array.from(document.querySelectorAll('.modules')));
        let modules = Array.from(document.querySelectorAll('.modules'))[0].children[0];

        if (!modules) {
            liEl.appendChild(h4El);
            liEl.appendChild(buttonEl);
            ulEl.appendChild(liEl);

            divEl.appendChild(h3El);
            divEl.appendChild(ulEl);
            divIntrainingSection.appendChild(divEl);
            return;
        }
        //newly selected h3
        let selectedH3 = Array.from(document.querySelectorAll('.module > h3'));
        console.log(selectedH3[selectedH3.length - 1].textContent);
        let h3lowerAsOriginal =  selectedH3[selectedH3.length - 1].textContent.split('-')[0].toLowerCase();
        let result = h3lowerAsOriginal.localeCompare(moduleType.value.toLowerCase())
        if (result == 0) {
            // select previous h4el and add this one before or behind it.

            liEl.appendChild(h4El);
            liEl.appendChild(buttonEl);
            let selectedUl = Array.from(document.querySelectorAll('.module > ul'));
            let lastSelectUl = selectedUl[selectedUl.length - 1];


            lastSelectUl.appendChild(liEl);


        } else {
            liEl.appendChild(h4El);
            liEl.appendChild(buttonEl);
            ulEl.appendChild(liEl);

            divEl.appendChild(h3El);
            divEl.appendChild(ulEl);
            divIntrainingSection.appendChild(divEl);
        }



    }
    function deleteButtonClicked(event) {
        console.log(event);
        if (event.target.parentElement.previousSibling == null && 
            event.target.parentElement.nextSibling == null) {
            event.target.parentElement.parentElement.parentElement.remove();
            return;
        }
        let top;
        if (event.target.parentElement.nextSibling == null) {
            
            top = event.target.parentElement.previousSibling.localName;
        }
        else{
            top = event.target.parentElement.nextSibling.localName;

        }
        let result = top.localeCompare('li');
        if (result == 0) {
            event.target.parentElement.remove();


        }
    }
}