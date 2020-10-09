function solve() {

   let rows = Array.from(document.querySelectorAll('tbody > tr'));
   let button = document.getElementById('searchBtn');
   let inputValue = document.getElementById('searchField');;

   button.addEventListener('click', find);


   function find() {
      let regex = new RegExp(inputValue.value, 'gim');
      rows.map(e => {
         e.classList.remove('select');
         if (e.innerHTML.match(regex) !== null) {
            e.className = 'select';
         }
      });
      // for (const iterator of rows) {
      //    iterator.removeAttribute('class');
      // }

      // for (const iterator of rows) {
      //    for (const i of iterator.children) {
      //       if (i.innerHTML === inputValue.value || i.innerHTML.includes(inputValue.value)) {
      //          i.parentElement.className = 'select'

      //       }
      //    }
      // }

      inputValue.value = '';
   }

}