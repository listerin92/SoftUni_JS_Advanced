function solve() {

    let form = Array.from(document.getElementsByTagName('form')[0].childNodes);
    let inputTask = document.getElementById('task');
    let inputDescription = document.getElementById('description');
    let inputDate = document.getElementById('date');
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        if (!inputTask.value || !inputDescription.value || !inputDate.value) {
            return;
        }


        let openOrangeH1div = document.querySelector('.orange').parentElement.nextElementSibling;
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = inputTask.value;

        let p1 = document.createElement('p');
        p1.textContent = `Description: ${inputDescription.value}`;

        let p2 = document.createElement('p');
        p2.textContent = `Due Date: ${inputDate.value}`;

        let div = document.createElement('div');
        div.className = 'flex';
        let greenButtonStart = document.createElement('button');
        greenButtonStart.className = 'green';
        greenButtonStart.textContent = 'Start';
        let redButtonDelete = document.createElement('button');
        redButtonDelete.className = 'red';
        redButtonDelete.textContent = 'Delete';

        div.appendChild(greenButtonStart);
        div.appendChild(redButtonDelete);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);
        openOrangeH1div.appendChild(article);
        greenButtonStart.addEventListener('click', startClick);

        redButtonDelete.addEventListener('click', e => {
            let clickedArticle = e.target.parentElement.parentElement;
            clickedArticle.remove();
        });

        function startClick(event) {
            let oldStartButtonEl = event.target;
            let oldDeleteButtonEl = event.target.nextElementSibling;
            let newDeleteRedButtonEl = document.createElement('button');
            newDeleteRedButtonEl.className = 'red';
            newDeleteRedButtonEl.textContent = 'Delete';
            let newFinishOrangeButtonEl = document.createElement('button');
            newFinishOrangeButtonEl.className = 'orange';
            newFinishOrangeButtonEl.textContent = 'Finish';
            let clickedArticle = event.target.parentElement.parentElement;
            let openYellowH1div = document.getElementById('in-progress');
            let parentOfButtons = event.target.parentElement;

            openYellowH1div.appendChild(clickedArticle);
            oldStartButtonEl.remove();
            oldDeleteButtonEl.remove();
            parentOfButtons.appendChild(newDeleteRedButtonEl);
            parentOfButtons.appendChild(newFinishOrangeButtonEl);

            newDeleteRedButtonEl.addEventListener('click', e => {
                e.target.parentElement.parentElement.remove();
            })
            newFinishOrangeButtonEl.addEventListener('click', finishClick);

            function finishClick(event) {

                let articleToMove = event.target.parentElement.parentElement;
                let parentOfButtons = event.target.parentElement;
                parentOfButtons.remove();

                let openGreenH1div = document.querySelector('.green').parentElement.nextElementSibling;
                openGreenH1div.appendChild(articleToMove);
                console.log(openGreenH1div);

            }
        }
    }
}