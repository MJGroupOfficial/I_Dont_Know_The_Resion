//generate rendom color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
        
    }
    return color   
};
//console.log(color)
//needed variables 
const body = document.querySelector('body')
const code = document.querySelector('#hexcode')

//start button
const start = document.querySelector('#start')
let intervalout;
const startBackground = function(){    
    if(!intervalout){
        intervalout = setInterval(backgroundChange,1500)
    }
    function backgroundChange(){
    let background = randomColor()        
    body.style.backgroundColor = `${background}`
    code.innerHTML = `${background}`    
    }
    
}

start.addEventListener('click',startBackground)

//stop button
const stop = document.querySelector('#stop')
const stopBackground = function(){
   // body.style.background = 'transparent'
    clearInterval(intervalout)
    intervalout = null;
}
stop.addEventListener('click',stopBackground)

