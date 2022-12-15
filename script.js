document.addEventListener('DOMContentLoaded', () => {
    start()
})

function start() {
    const enviar = document.getElementById('enviar')
    const cancelar = document.getElementById('cancelar')

    enviar.addEventListener('click', enviarForm);
    cancelar.addEventListener('click', cancelarForm);
}

function enviarForm(e){
    e.preventDefault()
    console.log('ds')
}

function cancelarForm(e){
    e.preventDefault()
    console.log('sa')
}