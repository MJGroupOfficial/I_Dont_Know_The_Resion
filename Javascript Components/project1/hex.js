const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btnEl = document.getElementById("button-el");
const colorEl = document.querySelector(".color");
const containerBg = document.querySelector("#container");
function clicked(){
  const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  let color = "#";
  for(let i = 0;i < 6; i++){
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  colorEl.textContent = color;
  document.body.style.backgroundColor = color;
}

btnEl.addEventListener("click",clicked) 