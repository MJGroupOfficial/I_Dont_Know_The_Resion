const asideBar = document.querySelector(".hide-aside");
const sidebarBtn = document.querySelector(".sidebar-btn");
sidebarBtn.addEventListener("click",function(){
  if(asideBar.classList.contains("show-aside")){
    asideBar.classList.remove("show-aside")
    asideBar.classList.add("hide-aside")
  }else{
    asideBar.classList.add("show-aside")
    asideBar.classList.remove("hide-aside")
  }
  if(sidebarBtn.classList.contains("sidebar-btn")){
    sidebarBtn.classList.remove("sidebar-btn")
    sidebarBtn.classList.add("sidebar-btn-rotate")
  }else{
    sidebarBtn.classList.remove("sidebar-btn-rotate")
    sidebarBtn.classList.add("sidebar-btn")
  }
})

const closeBtn = document.querySelector(".close-btn")
closeBtn.addEventListener("click",function(){
  if(asideBar.classList.contains("show-aside")){
    asideBar.classList.remove("show-aside")
    asideBar.classList.add("hide-aside")
  }
  if(closeBtn.classList.contains("close-btn")){
    closeBtn.classList.remove("close-btn")
    closeBtn.classList.add("close-btn-rotate")
  }else{
    closeBtn.classList.remove("close-btn-rotate")
    closeBtn.classList.add("close-btn")
  }
})