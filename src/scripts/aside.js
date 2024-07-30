import allTaskIcon from '../icons/inbox.png'
import todayIcon from '../icons/today1.png'
import thisWeekIcon from '../icons/week2.png'
import { projects, pushProject, allTasks } from './data'
import { mainHeading, renderTaskContainer, hideAddTaskButton, taskContainer, showAddTaskButton, hideAddTaskForm } from './main'

// selectors
const aside = document.querySelector('aside');
const projectContainer = aside.querySelector('.project-container')
const allTaskButton = aside.querySelector('.all-task-button')
const todayButton = aside.querySelector('.today-button')
const thisWeekButton = aside.querySelector('.this-week-button')

// form selectors
const addProjectButton = aside.querySelector('.add-project');
const formAddProject = aside.querySelector('.add-project-form');
const formCancelButton = formAddProject.querySelector('.cancel');
const projectName = formAddProject.querySelector('input')

// UI
function renderButtons() {

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
}

function setActiveClass(element) {
  if (!element.classList.contains('gp-tasks')) {
    element = element.parentNode
  }
  document.querySelectorAll('.gp-tasks').forEach(function (btn) {
    btn.classList.remove('active');
  });
  element.classList.add('active');

  mainHeading.innerHTML = element.innerText
}

function renderProjectContainer() {
  projectContainer.innerHTML = ''
  projects.forEach(project => {
    projectContainer.innerHTML += `
      <div class="project gp-tasks" data-id=${project.id}>
        <i class="fa-solid fa-list"></i>
        <h3>${project.projectName}</h3>
      </div>
  `
  })
}

function hideProjectForm() {
  formAddProject.style.display = 'none'
}

function showProjectForm() {
  formAddProject.style.display = 'block'
}

function hideProjectButton() {
  addProjectButton.style.display = 'none'
}

function showProjectButton() {
  addProjectButton.style.display = 'flex'
}

function findProjectId(elementId) {
  projects.forEach(project => {
    if (elementId === project.id) {
      renderTaskContainer(project.tasks);
    }
  })
}

// Interactions

aside.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('gp-tasks') || element.parentNode.classList.contains('gp-tasks')) {
    setActiveClass(element)
  }
})

// Interactions aside buttons

allTaskButton.addEventListener('click', () => {
  renderTaskContainer(allTasks)
  hideAddTaskButton()
  hideAddTaskForm()
})

todayButton.addEventListener('click', () => {
  taskContainer.innerHTML = ''
  hideAddTaskButton()
  hideAddTaskForm()
})

thisWeekButton.addEventListener('click', () => {
  taskContainer.innerHTML = ''
  hideAddTaskButton()
  hideAddTaskForm()
})

projectContainer.addEventListener('click', (e) => {
  let elementId;
  let element = e.target;
  if (element.classList.contains('gp-tasks') || element.parentNode.classList.contains('gp-tasks')) {
    if (!element.classList.contains('gp-tasks')) {
      element = element.parentNode
    }
    elementId = element.dataset.id;
  }
  findProjectId(elementId)
  showAddTaskButton()
  hideAddTaskForm()
})

// Add Project Button and Form Interactions

addProjectButton.addEventListener('click', () => {
  showProjectForm()
  hideProjectButton()
})

formAddProject.addEventListener('submit', (e) => {
  e.preventDefault()
  pushProject(projectName.value)
  renderProjectContainer()
  projectName.value = ''
})

formAddProject.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
});

formCancelButton.addEventListener('click', (e) => {
  e.preventDefault()
  hideProjectForm()
  showProjectButton()
  projectName.value = ''
})

function runAside() {
  hideProjectForm()
  renderProjectContainer()
  renderButtons()
}


export { renderProjectContainer,runAside }