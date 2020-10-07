function deleteByEmail() {
    let tdElements = document.getElementsByTagName('td');
    let input = document.getElementsByTagName('input');
    let deleted = false;
    for (const nameOrEmail of tdElements) {
        if (nameOrEmail.innerHTML === input[0].value) {
            let parrent = nameOrEmail.parentNode;
            let parrentBody = nameOrEmail.parentNode.parentNode;
            console.log(parrent);
            parrentBody.removeChild(parrent);
            deleted = true;
            break;

        }
    }
    let result = document.getElementById('result');
    if (deleted) {
        
        result.innerHTML = 'Deleted.';
    }else{
        result.innerHTML = 'Not found.';

    }

}