function solve() {

    const button = document.getElementsByTagName('button')[0];
    const inputText = document.getElementsByTagName('input')[0];
    const olEl = document.getElementsByTagName("ol");
    button.addEventListener('click', () => {
        if (inputText.value === "" ) {
            return;
        }
        let charPosition = inputText.value[0].charCodeAt(0) - 97;

        let remaining = inputText.value.substring(1);
        let firstToUpper = inputText.value.charAt(0).toUpperCase();
        let name = firstToUpper + remaining;

        if (olEl[0].children[charPosition].textContent === '') {
            olEl[0].children[charPosition].textContent = name;
        } else {
            olEl[0].children[charPosition].textContent += ", " + name;

        }
        
       inputText.value = null;

        let result = document.getElementsByTagName("ol");
        // result[0].children[15].textContent = 'Peterson, Pepe';
        console.log(result[0].children[0].textContent);
    });

}