function getValueofField(fieldId) {
  const fieldValue = parseInt(document.getElementById(fieldId).value);
  return fieldValue;
}
function setValueofElelment(elementId, value) {
  const elelement = document.getElementById(elementId);
  elelement.innerText = value;
}