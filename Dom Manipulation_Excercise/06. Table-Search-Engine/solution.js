function solve() {

   let rows = Array.from(document.querySelectorAll('tbody > tr')); // all table tr elements with query selector
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
      
      inputValue.value = '';
   }

}