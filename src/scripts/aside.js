import allTaskIcon from '../icons/inbox.png'
import todayIcon from '../icons/today1.png'
import thisWeekIcon from '../icons/week2.png'
import { projects, pushProject, allTasks, removeProject, renameProject } from './data'
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

  mainHeading.innerHTML = element.querySelector('h3').innerHTML
}

function renderProjectContainer() {
  projectContainer.innerHTML = ''
  projects.forEach(project => {
    projectContainer.innerHTML += `
      <div class="project gp-tasks" data-id=${project.id}>
        <i class="fa-solid fa-list"></i>
        <h3 class="project-name">${project.name}</h3>
        <div class="project-btn">
          <div class="drop-up">
            <i class="fa-solid fa-pen-to-square drop-btn hover"></i>
            <form class="rename-form">
              <input type="text" placeholder="Rename Project" required>
              <div class="btn-container">
                <button class="cancel">Cancel</button>
                <button class="submit">Submit</button>
              </div>
            </form>
          </div>
          <i class="fa-solid fa-trash-can hover"></i>  
        </div>
      </div>
  `
  })
}

function hideProjectForm() {
  formAddProject.style.display = 'none'
}

function showProjectForm() {
  const input = formAddProject.querySelector('input')
  formAddProject.style.display = 'block'
  input.focus()
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

function renderLastTask() {
  const allProjects = document.querySelectorAll('.project-container > div')
  setActiveClass(allProjects[allProjects.length - 1])
  renderTaskContainer(projects[projects.length - 1].tasks)
  showAddTaskButton()
}

// All Click Events Functions

function handleAllTaskBtn() {
  renderTaskContainer(allTasks)
  hideAddTaskButton()
  hideAddTaskForm()
}

function handleTodayBtn() {
  taskContainer.innerHTML = ''
  hideAddTaskButton()
  hideAddTaskForm()
}

function handleThisWeekBtn() {
  taskContainer.innerHTML = ''
  hideAddTaskButton()
  hideAddTaskForm()
}

function handleProjectContainer(e) {
  let element = e.target;

  if (element.classList.contains('drop-btn')) {
    const renameForm = element.nextElementSibling;
    renameForm.classList.toggle('show');

    const cancelBtn = renameForm.querySelector('.cancel')
    const submitBtn = renameForm.querySelector('.submit')
    const input = renameForm.querySelector('input')
    input.focus()

    renameForm.removeEventListener('submit', handleRenameForm)
    renameForm.addEventListener('keydown', handleSubmitBtn)
    cancelBtn.removeEventListener('click', handleCancelRenameBtn)

    renameForm.addEventListener('submit', handleRenameForm)
    cancelBtn.addEventListener('click', handleCancelRenameBtn)

    function handleSubmitBtn(e) {
      if (e.key === "Enter") {
        e.preventDefault()
        submitBtn.click()
      }
    }

    function handleRenameForm(e) {
      e.preventDefault()

      const project = element.closest('.project')
      const projectId = project.dataset.id
      renameProject(input.value, projectId)

      renameForm.classList.remove('show');

      if (project.classList.contains('active')) {
        setActiveClass(allTaskButton)
        renderTaskContainer(allTasks)
        hideAddTaskButton()
      }
      renderProjectContainer()
      input.value = ''
    }

    function handleCancelRenameBtn(e) {
      e.preventDefault()
      renameForm.classList.remove('show');
    }

    const hideForm = (event) => {
      if (!element.contains(event.target) && !renameForm.contains(event.target)) {
        renameForm.classList.remove('show');

        window.removeEventListener('click', hideForm);
      }
    };

    window.addEventListener('click', hideForm);
  }

  if (element.classList.contains('fa-trash-can')) {
    removeProject(element.closest('.project').dataset.id)
    setActiveClass(allTaskButton)
    renderProjectContainer()
    handleAllTaskBtn()
    return
  }

  if (element.classList.contains('gp-tasks') || element.parentNode.classList.contains('gp-tasks')) {
    let elementId;
    if (!element.classList.contains('gp-tasks')) {
      element = element.parentNode
    }
    elementId = element.dataset.id;
    findProjectId(elementId)
    showAddTaskButton()
    hideAddTaskForm()
  }
}

function handleAsideBtn(e) {
  const element = e.target;
  if (element.classList.contains('hover')) {
    return
  }
  if (element.classList.contains('gp-tasks') || element.parentNode.classList.contains('gp-tasks')) {
    setActiveClass(element)
  }
}

// form functions

function handleAddProjectBtn() {
  showProjectForm()
  hideProjectButton()
}

function handleAddProjectForm(e) {
  e.preventDefault()
  pushProject(projectName.value)
  renderProjectContainer()
  projectName.value = ''
  hideProjectForm()
  showProjectButton()
  renderLastTask()
}

function handleCancelProjectForm(e) {
  e.preventDefault()
  hideProjectForm()
  showProjectButton()
  projectName.value = ''
}

function handleSubmitBtn(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    const submitBtn = formAddProject.querySelector('.submit')
    submitBtn.click()
  }
}
// Event Listeners

aside.addEventListener('click', handleAsideBtn)
allTaskButton.addEventListener('click', handleAllTaskBtn)
todayButton.addEventListener('click', handleTodayBtn)
thisWeekButton.addEventListener('click', handleThisWeekBtn)
projectContainer.addEventListener('click', handleProjectContainer)

// Add Project Button and Form Listeners

addProjectButton.addEventListener('click', handleAddProjectBtn)
formAddProject.addEventListener('submit', handleAddProjectForm)
formAddProject.addEventListener('keydown', handleSubmitBtn);
formCancelButton.addEventListener('click', handleCancelProjectForm)

function runAside() {
  hideProjectForm()
  renderProjectContainer()
  renderButtons()
}

export { renderProjectContainer, runAside }