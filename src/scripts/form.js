// add project form

const formAddProject = document.querySelector('aside .add-project-form');
const addProjectButton = document.querySelector('aside .add-project');
const formCancelButton = formAddProject.querySelector('.cancel');
const input = formAddProject.querySelector('input')

formAddProject.addEventListener('submit', (e) => {
  e.preventDefault()
  let inputValue = input.value;
  if (inputValue === '') {
    alert('Input field is empty')
    return
  }

  console.log(inputValue);

  hideAddProjectForm()
  showAddProjectButton()
  input.value = ''
})

addProjectButton.addEventListener('click', () => {
  showAddProjectForm()
  hideAddProjectButton()
})

formCancelButton.addEventListener('click', (e) => {
  e.preventDefault()
  hideAddProjectForm()
  showAddProjectButton()
  input.value = ''
})

function hideAddProjectForm() {
  formAddProject.style.display = 'none'
}

function showAddProjectForm() {
  formAddProject.style.display = 'block'
}

function hideAddProjectButton() {
  addProjectButton.style.display = 'none'
}

function showAddProjectButton() {
  addProjectButton.style.display = 'flex'
}

hideAddProjectForm()

// add task form
const addTaskButton = document.querySelector('main .add-task');
