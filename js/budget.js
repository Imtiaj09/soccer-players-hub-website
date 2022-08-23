//Total Selected Players
const buttons = document.getElementsByClassName('select-button');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    const playerName = (event.target.parentNode.childNodes[1].innerText);
    const playerList = document.getElementById('player-list'); //ol
    const listlength = playerList.getElementsByTagName('li').length;
    if (listlength >= 5) {
      alert('Maximum five players can be slected');
    }
    else {
      const element = document.createElement('li');
      element.innerText = playerName;
      playerList.appendChild(element);
      event.target.setAttribute('disabled', true)
    }
  })
}