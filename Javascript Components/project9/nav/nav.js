const btn = document.querySelector(".menu-toggle")
const menus = document.querySelector(".links")
btn.addEventListener("click",() => {
  if(menus.classList.contains("links")){
    menus.classList.remove("links")
    menus.classList.add("showlinks")
  }else{
    menus.classList.add("links")
    menus.classList.remove("showlinks")
  }
  
  if (btn.classList.contains("menu-toggle")) {
    btn.classList.remove("menu-toggle");
    btn.classList.add("menu-toggle-done");
  } else {
    btn.classList.remove("menu-toggle-done");
    btn.classList.add("menu-toggle");
  }
})