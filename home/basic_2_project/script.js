const form = document.querySelector('form')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    result.style.color = 'red'
    result.style.fontSize = "19px"
    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "please give valid height"
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "please give valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span`
        results.style.fontSize = '28px'
        results.style.textAlign = 'center'
        
        const massage = document.querySelector('#massage')
        massage.style.fontSize = '24px'
        massage.style.margin = '1rem'
        
        if(bmi < 18.6){
            massage.innerHTML = `your weight in Under Weight `
            massage.style.color = '#c56231e2'
            results.style.color = '#c56231e2'
        }
        else if(bmi < 24.9){
            massage.innerHTML = `your weight in Normal Range`
            massage.style.color = 'green'
            results.style.color = 'green'
        }
        else{
            massage.innerHTML = `your weight in Over Weight`
            massage.style.color = 'red'
            results.style.color = 'red'
        }
    }
})
