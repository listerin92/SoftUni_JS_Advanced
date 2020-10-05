function solve() {
   let messageAreaSelect = document.getElementById("chat_messages");
   let input = document.getElementById("chat_input");
   let button = document.getElementById("send");
   button.addEventListener('click', ()=> {

      console.log(input.value);
      let message = document.createElement('div');
      message.className = "message my-message";
      message.innerHTML = input.value;
      messageAreaSelect.appendChild(message);
      input.value = '';
   });
}