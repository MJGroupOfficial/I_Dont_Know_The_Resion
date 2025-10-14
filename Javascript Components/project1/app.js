const color = ["green","red","rgb(0,112,164)","#a40095cd"];
const btnEl = document.getElementById("button-el");
const colorEl = document.querySelector(".color");
function clickedBtn(){
  btnEl.style.backgroundColor = "white";
  btnEl.style.color = "black";
  btnEl.style.border = "2px solid black";
}
btnEl.addEventListener("click",() => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = color[randomNumber];
  colorEl.textContent = color[randomNumber];
  })
function getRandomNumber(){
 return Math.floor(Math.random() * color.length);
}