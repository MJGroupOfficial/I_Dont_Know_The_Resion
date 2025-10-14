let initialNumber = Number("0");
const numbersEl = document.querySelector("#numbers");
let allButtons = document.querySelectorAll(".button");
numbersEl.innerText = initialNumber;
allButtons[0].addEventListener("click",function decrease(){
  initialNumber = initialNumber - 1;
  numbersEl.innerText = initialNumber;
  numbersEl.style.color = "red";
} );
allButtons[1].addEventListener("click",function reset(){
  initialNumber = Number("0");
  numbersEl.innerText = initialNumber;
  numbersEl.style.color = 'black';
});
allButtons[2].addEventListener("click",function increase(){
  initialNumber = initialNumber + 1;
  numbersEl.innerText = initialNumber;
  numbersEl.style.color = "green";
});


