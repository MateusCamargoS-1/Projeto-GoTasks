function getTasks() {
    return JSON.parse(localStorage.getItem('@GoTask')) || []
}

function setTasks(tasks) {
    localStorage.setItem('@GoTask', JSON.stringify(tasks))
}