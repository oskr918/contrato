let  boton = document.getElementById('boton');
let  contratar = document.getElementById('contratar');

contratar.addEventListener('click', ()=>{
    alert("Gracias por elegirme!!")
})
boton.addEventListener('mouseover', ()=>{
    boton.style.position="absolute"
    boton.style.marginTop= `${Math.floor(Math.random() * 260)}px`
    boton.style.marginLeft= `${Math.floor(Math.random() * 400)}px`
})


