import { allTasks, pushTask } from "./data";

const mainHeading = document.querySelector('main h1');
const taskContainer = document.querySelector('.task-container')
const addTaskButton = document.querySelector('main .add-task')
const addTaskForm = document.querySelector('main .add-task-form')
const taskName = addTaskForm.querySelector('.task-name')
const taskDetails = addTaskForm.querySelector('.task-details')
const taskDate = addTaskForm.querySelector('.date')
const taskPriority = addTaskForm.querySelector('.priority')

// UI

function renderTaskContainer(tasks) {
  taskContainer.innerHTML = ''
  tasks.forEach(task => {
    taskContainer.innerHTML += `
    <div class="task">
      <div class="task-name">
        <input type="checkbox">
        <p>${task.taskName}</p>
      </div>
      <div class="task-buttons">
        <i class="fa-solid fa-circle-info"></i>
        <p class="due-date">20 july</p>
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-trash-can"></i>
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
  addTaskForm.style.display = 'block'
}

function resetTaskForm() {
  taskName.value = ''
  taskDate.value = ''
  taskDetails.value = ''
  taskPriority.value = ''
}

// UI interactions Form

addTaskButton.addEventListener('click', () => {
  hideAddTaskButton()
  showAddTaskForm()
})

addTaskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const activeClass = document.querySelector('.active');
  const projectId = activeClass.dataset.id;
  pushTask(taskName.value, projectId)
  console.log(taskDetails.value);
  console.log(taskDate.value);
  console.log(taskPriority.value);

  resetTaskForm()
})

addTaskForm.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
});

function runMain() {
  renderTaskContainer(allTasks)
  hideAddTaskButton()
  hideAddTaskForm()
}

export { mainHeading, renderTaskContainer, hideAddTaskButton, taskContainer, showAddTaskButton, hideAddTaskForm, runMain }
