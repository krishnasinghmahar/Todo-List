import { allTasks, deleteTask, findProject, pushTask } from "./data";

const mainHeading = document.querySelector('main h1');
const taskContainer = document.querySelector('.task-container')
const addTaskButton = document.querySelector('main .add-task')
const addTaskForm = document.querySelector('main .add-task-form')
const taskName = addTaskForm.querySelector('.task-name')
const taskDetails = addTaskForm.querySelector('.task-details')
const taskDate = addTaskForm.querySelector('.date')
const taskPriority = addTaskForm.querySelector('.priority')
const cancelTaskForm = addTaskForm.querySelector('.cancel')

// UI

function renderTaskContainer(tasks) {
  taskContainer.innerHTML = ''
  tasks.forEach(task => {
    taskContainer.innerHTML += `
    <div class="task" data-task-id=${task.id}>
      <label class="custom-checkbox">
        <input type="checkbox">
        <span class="checkMark"></span>
        <p>${task.name}</p>
      </label>
      <div class="task-buttons">
        <i class="fa-solid fa-circle-info hover"></i>
        <p class="due-date">${task.date}</p>
        <i class="fa-solid fa-pen-to-square hover"></i>
        <i class="fa-solid fa-trash-can hover"></i>
      </div>
    </div>
  `
  })
}

function hideAddTaskButton() {
  addTaskButton.style.display = 'none'
}

function showAddTaskButton() {
  addTaskButton.style.display = 'flex'
}

function hideAddTaskForm() {
  addTaskForm.style.display = 'none'
  resetTaskForm()
}

function showAddTaskForm() {
  const input = addTaskForm.querySelector('.task-name')
  addTaskForm.style.display = 'block'
  input.focus()
}

function resetTaskForm() {
  taskName.value = ''
  taskDate.value = ''
  taskDetails.value = ''
  taskPriority.value = ''
}

// event handlers

function handleAddTaskBtn() {
  hideAddTaskButton()
  showAddTaskForm()
}

function handleAddTaskForm(e) {
  e.preventDefault()
  const activeClass = document.querySelector('.active');
  const projectId = activeClass.dataset.id;
  pushTask(taskName.value, taskDate.value, taskPriority.value, taskDetails.value, projectId)
  resetTaskForm()
}

function handleEnterKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    const submitBtn = addTaskForm.querySelector('.submit')
    submitBtn.click()
  }
}

function handleCancelTaskForm(e) {
  e.preventDefault()
  showAddTaskButton()
  hideAddTaskForm()
  resetTaskForm()
}

function handleTaskContainer(e) {
  const element = e.target

  // delete task
  if (element.classList.contains('fa-trash-can')) {
    const activeElement = document.querySelector('.active')
    const taskId = element.closest('.task').dataset.taskId

    deleteTask(taskId)

    if (activeElement.dataset.id === undefined) {
      if (activeElement.classList.contains('all-task-button')) {
        renderTaskContainer(allTasks)
      }
    } else {
      const projectId = activeElement.dataset.id
      const project = findProject(projectId)
      renderTaskContainer(project.tasks)
    }

  }
}

// UI interactions Form

addTaskButton.addEventListener('click', handleAddTaskBtn)
addTaskForm.addEventListener('submit', handleAddTaskForm)
addTaskForm.addEventListener('keydown', handleEnterKey)
cancelTaskForm.addEventListener('click', handleCancelTaskForm)
taskContainer.addEventListener('click', handleTaskContainer)


function runMain() {
  renderTaskContainer(allTasks)
  hideAddTaskButton()
  hideAddTaskForm()
}

export { mainHeading, renderTaskContainer, hideAddTaskButton, taskContainer, showAddTaskButton, hideAddTaskForm, runMain }
