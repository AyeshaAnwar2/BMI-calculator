const form =  document.querySelector('.my-form')

form.addEventListener('submit', function(e){
    e.preventDefault()

 const height = parseInt(document.querySelector('#Height').value)
 const weight = parseInt(document.querySelector('#Weight').value)
 const result = document.querySelector('#result')

if (height === '' || height<0 || isNaN(height) ){
    result.innerHTML = `please give a valid height ${height}`;
}
else if (weight === '' || weight <0 || isNaN(weight) ){
    result.innerHTML = `please give a valid height ${weight}`;
}
else{
    const bmi = (weight/ ((height*height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
}
})