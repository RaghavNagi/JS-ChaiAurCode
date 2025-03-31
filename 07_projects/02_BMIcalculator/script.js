const form = document.querySelector('form')

// this use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <=0 || isNaN(height)){
        result.innerHTML = "Please give valid height"
    }
    else if(weight === '' || weight <=0 || isNaN(weight)){
        result.innerHTML = "Please give valid weight"
    }
    else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);        //show the result
        result.innerHTML = `<span>${bmi}</span>`
    }
})