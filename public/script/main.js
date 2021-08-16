import Modal from './modal.js'

const modal = Modal ()

// Pegar as informações do do modal
const modalTittle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Criando uma função para abrir o modal
const handleClick = (event, check = true) =>{
    event.preventDefault()

    // Estrutura das propriedades do modal
    const text = check ? 'Marcar como lido' : 'Excluir'
    
    const tittle = `${text} esta pergunta`

    const textDescription = check ? 'Tem certeza que deseja marcar como lida' : 'Deseja excluir'

    const description = `${textDescription} esta pergunta?`

    // Alterando as propriedades da modal
    modalTittle.innerHTML = tittle
    modalDescription.innerHTML = description
    modalButton.innerHTML = ` Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

/* ================================================================================== */

    // Formulario
    const roomId = document.querySelector('#room-id').dataset.id

    const slug = check ? 'check' : 'delete'

    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

/* ================================================================================== */

    modal.open()
}

// Criação do algoritmo para deletar um post
const checkButtons = document.querySelectorAll('.actions a.check')

// Percorrer os botões de check
checkButtons.forEach(button => {
    // adicionar o evento
    button.addEventListener('click', handleClick)
})

// Criação do algoritmo para deletar um post
const deleteButtons = document.querySelectorAll('.actions a.delete')

// Percorrer os botões de check
deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))
})

