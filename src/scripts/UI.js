import allTaskIcon from '../icons/inbox.png'
import todayIcon from '../icons/today1.png'
import thisWeekIcon from '../icons/week2.png'
import { projects, allTasks } from './data'
import './form'

const allTaskButton = document.querySelector('.all-task-button')
const todayButton = document.querySelector('.today-button')
const thisWeekButton = document.querySelector('.this-week-button')
const projectContainer = document.querySelector('.project-container')
export const taskContainer = document.querySelector('.task-container')
const addTaskButton = document.querySelector('main .add-task');

export function hideAddTaskButton() {
  addTaskButton.style.display = 'none'
}

export function showAddTaskButton() {
  addTaskButton.style.display = 'flex'
}

allTaskButton.innerHTML = `
  <img src=${allTaskIcon}>
  <h3>All Tasks</h3>
`

todayButton.innerHTML = `
  <img src=${todayIcon}>  
   <h3>Today</h3>
`

thisWeekButton.innerHTML = `
  <img src=${thisWeekIcon}>
  <h3>This week</h3>
`

function renderProjectContainer() {
  projectContainer.innerHTML = ''
  projects.forEach(project => {
    projectContainer.innerHTML += `
      <div class="project gp-tasks">
        <i class="fa-solid fa-list"></i>
        <h3>${project.projectName}</h3>
      </div>
  `
  })
}

export function renderTaskContainer(tasks) {
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



renderTaskContainer(allTasks)
renderProjectContainer()
hideAddTaskButton()