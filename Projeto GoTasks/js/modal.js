const modal = document.getElementById('modal')
const inputDescription = document.getElementById('description')
const inputDate = document.getElementById('date')
const btnCreateTask = document.getElementById('btn-create-task')
const alertElement = document.getElementById('alert')

btnCreateTask.addEventListener('click', createTask)

function createTask(e) {
    e.preventDefault()

    // validando Formulario
    if (!inputDescription.value || !inputDate.value) {
        alertElement.style.display = 'block'
        closeAlert()
        return
    }

    // criando Objeto
    const newTask = {
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }

    const allTask = getTasks()

    setTasks([...allTask, newTask])

    reload()
    toggleModal()
    clearFields()
}

function toggleModal() {
    modal.classList.toggle('modal-visible')
}


function clearFields() {
    inputDate.value = ''
    inputDescription.value = ''
}

function closeAlert() {
    setTimeout(() => {
        alertElement.style.display = 'none'
    }, 3000)
}

