// EMPLOYEES
const employeesEl = document.getElementById('employees')

function addEmployee(name, jobTitle) {
    const employeeEl = document.createElement('div')
    employeeEl.classList.add('employee-card')

    employeeEl.innerHTML = `
        <div class='col6 mb-5'>
        <div class="card px-3 mx-3 pt-2">
        <h3>${name}</h3><hr>
        <p class="text-end">${jobTitle}</p>
        </div>
        </div>
    `
    employeesEl.appendChild(employeeEl)
}

addEmployee('Lucas', 'Software Engineer')

const employeeFormEl = document.getElementById('employeeForm')
employeeFormEl.addEventListener('submit', (event) => {
    event.preventDefault() // Prevents refresh

    let nameInput = document.getElementsByName('name')[0]
    let jobTitleInput = document.getElementsByName('jobTitle')[0]

    addEmployee(nameInput.value, jobTitleInput.value)

    nameInput.value = ''
    jobTitleInput.value = ''
})

const clearEmployeesBtn = document.getElementById('clearEmployees')
clearEmployeesBtn.addEventListener('click', (event) => {
    employeesEl.innerHTML = ''
})


// TO-DO
const tasksEl = document.getElementById('tasks')

function addTask(task, descr, assignedTo) {
    const taskEl = document.createElement('div')
    taskEl.classList.add('task-card')

    taskEl.innerHTML = `
        <div class='col6 mb-5'>
        <div class="card px-3 mx-3 pt-2">
        <h3>${task}</h3>
        <p>${descr}</p><hr>
        <p class="text-end">Assigned To: ${assignedTo}</p>
        </div>
        </div>
    `
    tasksEl.appendChild(taskEl)
}

const taskFormEl = document.getElementById('taskForm')
taskFormEl.addEventListener('submit', (event) => {
    event.preventDefault() // Prevents refresh

    let taskInput = document.getElementsByName('task')[0]
    let descrInput = document.getElementsByName('descr')[0]
    let assignedToInput = document.getElementsByName('assignedTo')[0]

    addTask(taskInput.value, descrInput.value, assignedToInput.value)

    taskInput.value = ''
    descrInput.value = ''
    assignedToInput.value = ''
})

const clearTasksBtn = document.getElementById('clearTasks')
clearTasksBtn.addEventListener('click', (event) => {
    tasksEl.innerHTML = ''
})