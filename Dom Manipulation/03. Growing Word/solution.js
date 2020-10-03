function growingWord() {

  //TODO...
  let px =2;
  let bottomEL = document.getElementById('exercise').lastElementChild;
  let colorChanges = {
    "blue": "green",
    "green": "red",
    "red": "blue"
  };

  if (!bottomEL.style.fontSize) {
    bottomEL.setAttribute("style", `color: blue; ; font-size: ${px}px; text-Align: center`)

  }
  else {
    let size = parseInt(bottomEL.style.fontSize);
    let currentColor = bottomEL.style.color;
    let currentPx = bottomEL.style["font-size"];
    px = currentPx.substr(0, currentPx.length - 2) * 2;

    bottomEL.setAttribute("style", `color:${colorChanges[currentColor]}; ; font-size: ${px}px; text-Align: center`);

  }
}