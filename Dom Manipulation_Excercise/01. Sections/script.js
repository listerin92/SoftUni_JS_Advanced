function create(words) {
   let parent = document.getElementById('content');
   
   words.forEach(element => {
      console.log(element);
      let divEL = document.createElement('div');
      divEL.id = element;
      divEL.addEventListener('click', showInParagraph);
      let pEL = document.createElement('p');
      pEL.innerHTML = element;
      pEL.style.display = 'none';

      
      
      divEL.appendChild(pEL);
      parent.appendChild(divEL);

   });

   function showInParagraph(event){
      
      event.path[0].children[0].style.display = 'block';

   }
}  