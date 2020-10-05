function solve() {

    let inputText = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[0];
    let olEl = document.getElementsByTagName('li');
    button.addEventListener('click', () => {
        let charPosition = inputText.value[0].charCodeAt(0) - 97;

        let remaining = inputText.value.substring(1);
        let firstToUpper = inputText.value.charAt(0).toUpperCase();
        let name = firstToUpper + remaining;

        if (olEl[charPosition].textContent === '') {
            olEl[charPosition].textContent = name;
        } else {
            olEl[charPosition].textContent += ", " + name;

        }
        // let resutl = document.getElementsByTagName('li');
        // console.log(resutl[15].textContent);
    });

}