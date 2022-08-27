const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

hamburguer.addEventListener('click', ()=>{
 menu.classList.toggle("spreed")
})


window.addEventListener('click', e=>{
if(menu.classList.contains('spreed')  && e.target != menu &&  e.target != hamburguer  )
{
    menu.classList.toggle("spreed")
}

})