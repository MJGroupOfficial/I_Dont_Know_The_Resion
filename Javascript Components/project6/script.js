const answer = document.querySelectorAll(".answer-container");
const line = document.querySelectorAll(".line");
 const btn = document.querySelectorAll(".plus-btn");
for(let i=0; i < 3; i++){
  btn[i].addEventListener("click",() => {
  if(answer[i].classList.contains("answer-container")){
    answer[i].classList.remove("answer-container")
    answer[i].classList.add("answer-container-show")
   line[i].classList.remove("line")
   line[i].classList.add("show-line")
  }else{
    answer[i].classList.add("answer-container")
    answer[i].classList.remove("answer-container-show")
    line[i].classList.remove("show-line")
   line[i].classList.add("line")
  }
})
}

/***** big code *****/
// const answer = document.querySelectorAll(".answer-container");
// const btn = document.querySelectorAll(".plus-btn");
// const line = document.querySelectorAll(".line");
// btn[0].addEventListener("click",() => {
//   if(answer[0].classList.contains("answer-container")){
//     answer[0].classList.remove("answer-container")
//     answer[0].classList.add("answer-container-show")
//    line[0].classList.remove("line")
//    line[0].classList.add("show-line")
//   }else{
//     answer[0].classList.add("answer-container")
//     answer[0].classList.remove("answer-container-show")
//     line[0].classList.remove("show-line")
//    line[0].classList.add("line")
//   }
// })
// btn[1].addEventListener("click",() => {
//   if(answer[1].classList.contains("answer-container")){
//     answer[1].classList.remove("answer-container")
//     answer[1].classList.add("answer-container-show")
//    line[1].classList.remove("line")
//    line[1].classList.add("show-line")
//   }else{
//     answer[1].classList.add("answer-container")
//     answer[1].classList.remove("answer-container-show")
//     line[1].classList.remove("show-line")
//    line[1].classList.add("line")
//   }
// })
// btn[2].addEventListener("click",() => {
//   if(answer[2].classList.contains("answer-container")){
//     answer[2].classList.remove("answer-container")
//     answer[2].classList.add("answer-container-show")
//    line[2].classList.remove("line")
//    line[2].classList.add("show-line")
//   }else{
//     answer[2].classList.add("answer-container")
//     answer[2].classList.remove("answer-container-show")
//     line[2].classList.remove("show-line")
//    line[2].classList.add("line")
//   }
// })