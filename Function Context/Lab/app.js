function solve() {
    let boxElement = document.getElementById('box');
    boxElement.addEventListener('click', function(e){
        console.log(e.currentTarget);
    });

}