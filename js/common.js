function getValueofField(fieldId) {
  const fieldValue = parseInt(document.getElementById(fieldId).value);
  return fieldValue;
}
function setValueofElelment(elementId, value) {
  const elelement = document.getElementById(elementId);
  elelement.innerText = value;
}

//
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