function solve() {
   let tr = document.getElementsByTagName('tr');
   console.log([...tr].slice(1)); //htmlCollection to Array destructuring skip firstOne
   let clicked = [];
   [...tr].slice(1).forEach(row => {
      row.addEventListener('click', (event) => {
         let previousSelected = clicked.pop();
         let element = event.target.parentNode.style;
         if (element.backgroundColor == '' || element.backgroundColor == undefined) {

            element.backgroundColor = "#413f5e"
            if (previousSelected !== undefined && previousSelected.backgroundColor === 'rgb(65, 63, 94)') {
               previousSelected.backgroundColor = '';
            }
            clicked.push(element);
         }
         else {
            element.backgroundColor = '';
         }
      });
   });
}