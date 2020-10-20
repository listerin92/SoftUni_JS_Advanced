function solve() {
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kingElement, ownerElement] = inputElements;

    let buttonInput = document.querySelector('#container button');
    let adoptionUlElement = document.querySelector('#adoption ul');
    let adoptedUlElement = document.querySelector('#adopted ul');

    buttonInput.addEventListener('click', event => {
        event.preventDefault();

        if (!inputElements.every(x => x.value)) {
            return;
        }

        if (isNaN(ageElement.value)) {
            return;
        }


        let liEl = document.createElement('li');
        let pEl = document.createElement('p');
        let spanEl = document.createElement('span');
        let buttonPetEl = document.createElement('button');

        pEl.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kingElement.value}</strong>`;
        spanEl.textContent = `Owner: ${ownerElement.value}`;
        buttonPetEl.textContent = 'Contact with owner';

        liEl.appendChild(pEl);
        liEl.appendChild(spanEl);
        liEl.appendChild(buttonPetEl);
        adoptionUlElement.appendChild(liEl);

        nameElement.value = '';
        ageElement.value = '';
        kingElement.value = '';
        ownerElement.value = '';

        buttonPetEl.addEventListener('click', event => {

            event.currentTarget.remove();

            let divEl = document.createElement('div');
            let inputEl = document.createElement('input');
            let takeItButEl = document.createElement('button');

            inputEl.placeholder = 'Enter your names';
            takeItButEl.textContent = 'Yes! I take it!'
            divEl.appendChild(inputEl);
            divEl.appendChild(takeItButEl);
            liEl.appendChild(divEl);


            takeItButEl.addEventListener('click', e => {
                
                let parentButtonEl = e.currentTarget.parentElement;
                let liElement = parentButtonEl.parentElement;

                adoptedUlElement.appendChild(liElement);

                let inputnNewOwnerValue = liElement.querySelector('input');
                let ownerNameSpanEl = liElement.querySelector('span');

                let changedOwner = inputnNewOwnerValue.value;
                ownerNameSpanEl.textContent = `New Owner: ${changedOwner}`;

                parentButtonEl.remove();

                let checkedButtonEl = document.createElement('button');
                checkedButtonEl.textContent = 'Checked';

                liElement.appendChild(checkedButtonEl);

                checkedButtonEl.addEventListener('click', e =>{
                    liElement.remove();
                })
                
            });
        })
    });
}