let res = document.querySelector("#res")
let colorpicker = document.querySelector('#colorselector')

colorpicker.addEventListener('input', ()=>{
    let color = colorpicker.value;
    document.body.style.background = color
})

