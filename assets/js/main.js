const messageInput = document.getElementById('message-input')
const message = document.getElementById('message')
const warnung = document.getElementById('warnung')


function showMessage() {
  if (messageInput.value == ""){
    warnung.style.display = "block";
  }
  else {
    warnung.style.display = "none";
    message.innerHTML = messageInput.value
  }
}
