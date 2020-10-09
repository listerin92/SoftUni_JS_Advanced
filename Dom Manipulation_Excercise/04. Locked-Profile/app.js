function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', clickFunc));

    function clickFunc(event) {

        let unlockStatus = event.target.parentElement.getElementsByTagName('input')[1].checked;
        let shown = event.target.parentElement.getElementsByTagName('div')[0].style.display;
        if (unlockStatus || shown == 'none') {
            event.target.parentElement.getElementsByTagName('div')[0].style.display = 'block';
            event.target.textContent = 'Hide it';

        }
        else if (unlockStatus && shown) {
            event.target.parentElement.getElementsByTagName('div')[0].style.display = 'none';
            event.target.textContent = 'Show more';
        }
    };
}