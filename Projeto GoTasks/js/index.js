const table = document.getElementById('table')
const form = document.getElementById('form')
const loadingMessage = document.getElementById('loading-message')
const countTasks = document.getElementById('count-tasks')

function updateCountTask() {
    const allTask = getTasks()

    countTasks.innerHTML = allTask.length
}

function fillTable() {
    const allTask = getTasks()
    allTask.forEach(addTask)
    
    if (allTask.length === 0) {
        loadingMessage.innerHTML = 'Você não tem nenhuma tarefas!'
    } else {
        loadingMessage.innerHTML = ''
    }
    
    updateCountTask()
}

function addTask(task) {
    const tr = document.createElement('tr')
    tr.innerHTML = innerHTMlTasks(task)

    table.appendChild(tr)
}

function innerHTMlTasks(task) {
    const html = `
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td>
        <a href="#" onclick="removeTask(${task.id})">
            <i class="fas fa-trash"></i>
        </a>
    </td>
    `

    return html
}

function removeTask(id) {
    const allTask = getTasks()
    const tasksFiltered = allTask.filter(task => task.id !== id)

    setTasks(tasksFiltered)
    reload()
}

function reload() {
    table.innerHTML = ''
    fillTable()
}