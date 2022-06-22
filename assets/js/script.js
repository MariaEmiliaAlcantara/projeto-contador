/*  
 -- CÓDIGO REALIZADO JUNTO COM A PROFESSORA -- 

HTML: button "onclick = increment()" and button "onclick = decrement()"

let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function increment() {
  currentNumber += 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber -= 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
*/

/* Desafios (realizados sozinha):
    1. mudar para addEventListener
    2. desabilitar botão para não mostrar números negativos
*/

let buttonIncrement = document.getElementById("increment");
let buttonDecrement = document.getElementById("decrement");
let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

buttonIncrement.addEventListener("click", increment);

function increment() {
  currentNumber += 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

buttonDecrement.addEventListener("click", decrement);

function decrement() {
  if (currentNumber == 0) {
    buttonDecrement.setAttribute("disabled");
  }

  currentNumber -= 1;
  currentNumberWrapper.innerHTML = currentNumber;
}
