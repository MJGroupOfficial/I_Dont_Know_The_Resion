
//1st method

const menuBtn = document.querySelector(".nav-toggle");
const menus = document.querySelector(".links");
// 
// function menus() {
//   menus.classList.toggle("show-links");
//   menuBtn.classList.toggle("menu-rotate")
// }
// 
// menuBtn.addEventListener("click", menus);
// 




//second method

menuBtn.addEventListener("click",function(){
//menu bar open
  if(menus.classList.contains("show-links")){
    menus.classList.remove("show-links")
  }else{
    menus.classList.add("show-links")
  }
//menu button rotate
  if(menuBtn.classList.contains("menu-rotate")){
    menuBtn.classList.remove("menu-rotate")
  }else{
    menuBtn.classList.add("menu-rotate")
  }
})