
function calcularPeso() {
  let inputHeight = document.getElementById("height");
  let inputWeight = document.getElementById("weight");
  let resultDiv = document.getElementById("result");

  let height = parseFloat(inputHeight.value);
  let weight = parseFloat(inputWeight.value);

  if(isNaN(height) || isNaN(weight)) {
    resultDiv.textContent = "Por Favor ingrese un valor Valido para el Peso Y Altura"; 
    return;
  }

  let imc = weight / ((height / 100) ** 2);
  let categoria = "";

  if(imc < 18.5){
    categoria = "Bajo Peso";
  } else if(imc < 25) {
    categoria = "Peso Normal";
  } else if(imc < 30) {
    categoria = "Sobrepeso";
  }else {
    categoria = "Obesidad";
  };

  resultDiv.textContent = `Su IMC es de ${imc.toFixed(2)} (${categoria})`

}
let boton = document.getElementById("calcular");
boton.addEventListener("click", calcularPeso);