//FADES
const hiddenElementos = document.querySelectorAll('.hidden');

//Eventos
addEvents();
function addEvents(){
    document.addEventListener('scroll', fade);
}

function fade(){
    hiddenElementos.forEach(elemento => {
        const rect = elemento.getBoundingClientRect();
        if(rect.y <= 1005.53125){
            elemento.classList.remove('hidden');
            elemento.classList.add('fadeInUp');
        }
    })
}