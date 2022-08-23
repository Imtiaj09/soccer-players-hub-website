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


//Players-Manager-Coach total Budget

document.getElementById('btn-calculate').addEventListener('click', function () {
  const playerNumber = document.getElementById('player-list').getElementsByTagName('li').length;
  const newCalculateAmount = getValueofField('calculate-field');
  const newExpenceTotal = newCalculateAmount * playerNumber;
  setValueofElelment('expence-total', newExpenceTotal);
})

document.getElementById('btn-total').addEventListener('click', function () {
  const newExpenceTotalString = document.getElementById('expence-total').innerText;
  const newExpenceTotal = parseInt(newExpenceTotalString);
  const managerTotalAmount = getValueofField('manager-field');
  const coachTotalAmount = getValueofField('coach-field');
  const newCalculateAmmount = newExpenceTotal + managerTotalAmount + coachTotalAmount;
  setValueofElelment('total-calculation', newCalculateAmmount);
})