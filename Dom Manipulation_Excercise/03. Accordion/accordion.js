function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let divElement = document.getElementById('extra');
    if (button.innerHTML == 'More') {
        divElement.style.display = "block";
        button.innerText = "Less";
        
    }
    else{
        divElement.style.display = "none";
        button.innerText = "More";
    }
    
    console.log(button);
}