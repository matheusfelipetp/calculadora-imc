const inputWeight = document.querySelector("#weight");
inputWeight.addEventListener("keyup", valueWeight);

const inputHeight = document.querySelector("#height");
inputHeight.addEventListener("keyup", valueHeight);

const btnForm = document.querySelector("#btnForm");
btnForm.addEventListener("click", listResult);

function valueWeight() {
  const value = inputWeight.value;
  return +value;
}

function valueHeight() {
  const value = inputHeight.value;
  return +value;
}

function calculateIMC() {
  const weight = valueWeight();
  const height = valueHeight();
  return weight / (height * height);
}

function listResult(event) {
  event.preventDefault();
  const result = +calculateIMC().toFixed(2);
  let text = "";
  if (result >= 16 && result <= 16.9) {
    text = "Muito abaixo do peso";
  } else if (result >= 17 && result <= 18.4) {
    text = "Abaixo do peso";
  } else if (result >= 18.5 && result <= 24.9) {
    text = "Peso normal";
  } else if (result >= 25 && result <= 29.9) {
    text = "Acima do peso";
  } else if (result >= 30 && result <= 34.9) {
    text = "Obesidade grau I";
  } else if (result >= 35 && result <= 40) {
    text = "Obesidade grau II";
  } else {
    text = "Obesidade grau III";
  }

  const sectionResult = document.querySelector(".result");
  const imcValue = document.createElement("p");
  const imcText = document.createElement("p");

  sectionResult.innerHTML = "";
  imcValue.innerText = `O seu IMC é ${result}`;
  imcText.innerHTML = `Este valor é considerado <span>${text}</span>`;

  sectionResult.append(imcValue, imcText);
}
