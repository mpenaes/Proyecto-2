const linkDeContacto = document.querySelector(".contacto")
linkDeContacto.addEventListener('click', () => {
    console.log('voy por buen camino...')
    document.getElementById("contacto").scrollIntoView({behavior: 'smooth'});
    
})

const submitBotton = document.querySelector('.submit-form')
submitBotton.addEventListener('click', () => {
    alert('Formulario enviado');
    
})


