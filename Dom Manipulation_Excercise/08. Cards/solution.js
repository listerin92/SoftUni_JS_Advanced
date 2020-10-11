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
      if (e.target.style.borderColor === 'green') {
         result.firstElementChild.innerHTML = '';
         result.lastElementChild.innerHTML = '';
         return;
      } else if (e.target.style.borderColor === 'red') return;


      let regex = new RegExp('\\bwhite');
      if (hands2Arr.length > 0
         && hands2Arr[hands2Arr.length - 1].target.src.match(regex)
         && hands2Arr[hands2Arr.length - 1].target.style.borderColor !== 'green'
         && hands2Arr[hands2Arr.length - 1].target.style.borderColor !== 'red') {
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

         if (Number(hands1Arr[hand1Count].target.name) > Number(hands2Arr[hand2Count].target.name)) {
            hands1Arr[hand1Count].target.style.borderWidth = '2px';
            hands1Arr[hand1Count].target.style.borderStyle = 'solid';
            hands1Arr[hand1Count].target.style.borderColor = 'green';
            hands2Arr[hand2Count].target.style.borderWidth = '2px';
            hands2Arr[hand2Count].target.style.borderStyle = 'solid';
            hands2Arr[hand2Count].target.style.borderColor = 'red';

            addToHistory();

         } else if (Number(hands1Arr[hand1Count].target.name) < Number(hands2Arr[hand2Count].target.name)) {
            hands1Arr[hand1Count].target.style.borderWidth = '2px';
            hands1Arr[hand1Count].target.style.borderStyle = 'solid';
            hands1Arr[hand1Count].target.style.borderColor = 'red';
            hands2Arr[hand2Count].target.style.borderWidth = '2px';
            hands2Arr[hand2Count].target.style.borderStyle = 'solid';
            hands2Arr[hand2Count].target.style.borderColor = 'green';
            addToHistory();
         }
      }

      function addToHistory() {
         history.innerHTML += `[${result.firstElementChild.innerHTML}` + ` vs ` +
            `${result.lastElementChild.innerHTML}]` + ` `;

      }

   }
}