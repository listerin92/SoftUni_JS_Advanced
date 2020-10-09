function solve() {
  let generateBtn = document.querySelectorAll('button')[0];
  let buyBtn = document.querySelectorAll('button')[1];

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  let furnitureList = document.querySelectorAll('textarea')[0];
  let buyList = document.querySelectorAll('textarea')[1];
  let table = document.querySelectorAll('tbody')[0];


  function generate() {
    let list = JSON.parse(furnitureList.value);
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      let tr = document.createElement('tr');
      {
        let td = document.createElement('td');
        let img = document.createElement('img');
        img.src = element.img;
        td.appendChild(img);
        tr.appendChild(td);
      }
      {
        let td = document.createElement('td');
        let p = document.createElement('p');
        p.innerHTML = element.name;
        td.appendChild(p);
        tr.appendChild(td);

      }
      {
        let td = document.createElement('td');
        let p = document.createElement('p');
        p.innerHTML = element.price;
        td.appendChild(p);
        tr.appendChild(td);
      }
      {
        let td = document.createElement('td');
        let p = document.createElement('p');
        p.innerHTML = element.decFactor;
        td.appendChild(p);
        tr.appendChild(td);
      }
      {
        let td = document.createElement('td');
        let inp = document.createElement('input');
        inp.type = 'checkbox';
        td.appendChild(inp);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

  }
  function buy() {
    let boughtItems = [];
    let sum = 0;
    let decFactor = 0
    let checkedItems = 0;

    let trElements = Array.from(document.getElementsByTagName('tr')); // get deeper elements table elements
    console.log(trElements);
    for (let i = 2; i < trElements.length; i++) {
      if (trElements[i].children[4].children[0].checked) {

        boughtItems.push(trElements[i].children[1].textContent);
        sum += Number(trElements[i].children[2].textContent);
        decFactor += Number(trElements[i].children[3].textContent);
        checkedItems++;
      }

    }

    decFactor = decFactor / checkedItems;


    buyList.innerHTML =
      `Bought furniture: ${boughtItems.join(', ')}\n` +
      `Total price: ${sum.toFixed(2)}\n` +
      `Average decoration factor: ${decFactor}`;
  }

}