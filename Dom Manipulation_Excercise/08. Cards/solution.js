function solve() {
   let player1Div = document.getElementById('player1Div');
   let player2Div = document.getElementById('player2Div');
   let player1DivImg = player1Div.getElementsByTagName('img');
   let player2DivImg = player2Div.getElementsByTagName('img');
   let result = document.getElementById('result');
   let history = document.getElementById('history');
   let hand1Count = -1;
   let hand2Count = -1;


   let hands1Arr = [];
   let hands2Arr = [];

   for (let i = 0; i < player1DivImg.length; i++) {
      player1DivImg[i].addEventListener('click', record1);
      player2DivImg[i].addEventListener('click', record2);
   }

   function record1(e) {
      //should whait to click on the green winner card 
      if (e.target.style.borderColor === 'green') {
         result.firstElementChild.innerHTML = '';
         result.lastElementChild.innerHTML = '';
         return;
      } else if (e.target.style.borderColor === 'red') return;


      let regex = new RegExp('\\bwhite');
      if (hands1Arr.length > 0
         && hands1Arr[hands1Arr.length - 1].target.src.match(regex)
         && hands1Arr[hands1Arr.length - 1].target.style.borderColor !== 'green'
         && hands1Arr[hands1Arr.length - 1].target.style.borderColor !== 'red') {
         return;
      }

      hand1Count++;

      if (e.target.parentElement.id === 'player1Div') {
         e.target.src = 'images/whiteCard.jpg';
         result.firstElementChild.innerHTML = e.target.name;
      }

      hands1Arr.push(e);
      check();
   }

   function record2(e) {
      //TODO after check, accept only click on the green card to clear the result

      if (e.target.style.borderColor === 'green') {
         result.firstElementChild.innerHTML = '';
         result.lastElementChild.innerHTML = '';
         return;
      } else if (e.target.style.borderColor === 'red') return;


      let regex = new RegExp('\\bwhite');
      const lastClickedDeckOne = hands2Arr[hands2Arr.length - 1].target;
      if (hands2Arr.length > 0
         && lastClickedDeckOne.src.match(regex)
         && lastClickedDeckOne.target.style.borderColor !== 'green'
         && lastClickedDeckOne.target.style.borderColor !== 'red') {
         return;
      }
      hand2Count++;

      if (e.target.parentElement.id === 'player2Div') {
         e.target.src = 'images/whiteCard.jpg';
         result.lastElementChild.innerHTML = e.target.name;

      }
      hands2Arr.push(e);
      check();

   }

   function check() {

      if (hand1Count === hand2Count) {

         const currentCardDeckOne = hands1Arr[hand1Count].target;
         const currentCardDeckTwo = hands2Arr[hand2Count].target;

         if (Number(currentCardDeckOne.name) > Number(currentCardDeckTwo.name)) {

            currentCardDeckOne.target.style.borderWidth = '2px';
            currentCardDeckOne.style.borderStyle = 'solid';
            currentCardDeckOne.style.borderColor = 'green';

            currentCardDeckTwo.style.borderWidth = '2px';
            currentCardDeckTwo.style.borderStyle = 'solid';
            currentCardDeckTwo.style.borderColor = 'red';

            addToHistory();
         } else if (Number(currentCardDeckOne.name) < Number(currentCardDeckTwo.name)) {
            
            currentCardDeckOne.style.borderWidth = '2px';
            currentCardDeckOne.style.borderStyle = 'solid';
            currentCardDeckOne.style.borderColor = 'red';

            currentCardDeckTwo.style.borderWidth = '2px';
            currentCardDeckTwo.style.borderStyle = 'solid';
            currentCardDeckTwo.style.borderColor = 'green';

            addToHistory();
         }
      }

      function addToHistory() {
         history.innerHTML += `[${result.firstElementChild.innerHTML}` + ` vs ` +
            `${result.lastElementChild.innerHTML}]` + ` `;
      }

   }
}