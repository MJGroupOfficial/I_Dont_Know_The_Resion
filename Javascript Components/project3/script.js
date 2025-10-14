const reviews = [
  {
    id:1,
    name:"sara jones",
    job:"front-end developer",
    img:"./images/img1.jpg",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quia, quisquam cupiditate similique nam tempora."
  },
  {
    id:2,
    name:"rajesh roy",
    job:"ux designer",
    img:"./images/img2.jpg",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae explicabo itaque quis placeat, eveniet ab!"
  },
  {
    id:3,
    name:"jiban roy",
    job:"html",
    img:"./images/img3.jpg",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aspernatur dolor rerum odit alias est."
  },
  {
    id:4,
    name:"chameli jans",
    job:"shoftware developer",
    img:"./images/img4.jpg",
    text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi pariatur, impedit provident neque autem enim!"
  }
  ];
//
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
//buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
function personInfo(){
  const item = reviews[currentItem];
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
}
window.addEventListener("DOMContentLoaded",personInfo);
//buttons
//next button
function next(){
  if(currentItem < (reviews.length - 1)){
  currentItem++;
  personInfo();
  }
  else{
    personInfo().clear();
  }
}
nextBtn.addEventListener("click",next);
//previous btn
function previous(){
  if(currentItem > 0){
  currentItem--;
  personInfo();
  }
  else{
    currentItem = 0;
    personInfo().clear();
  }
}
prevBtn.addEventListener("click",previous);
//random button
function random(){
  let randomNumber = Math.floor(Math.random() * reviews.length);
  currentItem = randomNumber;
  personInfo();
}
randomBtn.addEventListener("click",random)
