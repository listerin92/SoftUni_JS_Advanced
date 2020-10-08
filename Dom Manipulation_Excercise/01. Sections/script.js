function create(words) {
   let content = document.getElementById('content');

   words.forEach(word => {
      console.log(word);
      let div = document.createElement('div');
      div.id = word;
      div.addEventListener('click', () => {
         p.style.display = 'block';
      });
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      content.appendChild(div);

   });
}  