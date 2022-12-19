document.addEventListener('DOMContentLoaded', () => {
    start()
})

function start() {
    const enviar = document.getElementById('enviar')
    const cancelar = document.getElementById('cancelar')

    enviar.addEventListener('click', enviarForm);
    cancelar.addEventListener('click', cancelarForm);
    btnLinks()

}

function enviarForm(e) {
    e.preventDefault()
    let msg = document.getElementsByClassName('msg')[0]

    let input = document.querySelectorAll('.input')
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''
    console.log(input)
   msg.style.opacity = '1'
   setTimeout(()=>{
    msg.style.opacity = '0'
   }, 2000)
}

function cancelarForm(e) {
    e.preventDefault()
    
    let input = document.querySelectorAll('.input')
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''
}

function btnLinks(){

    let notFound = document.getElementById('notFoundScreen')
    
    for(let i = 0; i < 5; i++){
        document.querySelectorAll('.rodape-icons')[i].addEventListener('mouseenter', ()=>{
            notFound.style.display = 'block'
        })
        document.querySelectorAll('.rodape-icons')[i].addEventListener('mouseleave', ()=>{
            notFound.style.display = 'none'
          })
    }
}
