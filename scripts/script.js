import { projects, allTask, pushProject, pushTaskProject } from "./data.js";


function renderProjectHtml() {
  let projectHTML = '';

  projects.forEach((project) => {
    projectHTML += `
    <div class="btn-container">
      <span class="material-symbols-outlined">
        fact_check
      </span>
      <span class="btn-name">
        ${project.name}
      </span>
    </div>
  `
  })

  document.querySelector('.project-list-container').innerHTML = projectHTML;
}

function renderTaskHtml(tasks) {
  let taskHTML = '';

  tasks.forEach((task) => {
    taskHTML += `
      <div class="task">
        <div>
          <input type="checkbox">
          <span>${task.name}</span>
        </div>
        <div>
          <span class="material-symbols-outlined">
            info
          </span>
          <span>
            June 6th
          </span>
          <span class="material-symbols-outlined">
            edit
          </span>
          <span class="material-symbols-outlined">
            delete
          </span>
        </div>
      </div >
    `
  })

  document.querySelector('.task-container').innerHTML = taskHTML;
}

function toggleBtnClass() {
  document.querySelectorAll('.btn-container').forEach((button) => {
    button.addEventListener('click', () => {

      document.querySelectorAll('.btn-container').forEach((btn) => {
        btn.classList.remove('btn-clicked');
      });

      button.classList.add('btn-clicked');
      toggleTaskHeading(button);
    })
  })
}

function toggleTaskHeading(button) {
  const taskHeading = document.querySelector('.task-heading');
  const btnName = button.querySelector('.btn-name').textContent;
  const btnIcon = button.querySelector('.material-symbols-outlined').textContent;

  taskHeading.innerHTML = `
    <span class="material-symbols-outlined">
      ${btnIcon}
    </span>
    <h1>${btnName}</h1>
  `
}

function renderProjectTask() {
  document.querySelector('.project-list-container').addEventListener('click', (event) => {
    const button = event.target.closest('.btn-container');
    const btnName = button.querySelector('.btn-name').textContent.trim();
    projects.forEach(project => {
      if (project.name === btnName) {
        renderTaskHtml(project.tasks);
      }
    })
  });
}

function renderAllTasks() {
  document.querySelector('.js-inbox-btn').addEventListener('click', () => {
    renderTaskHtml(allTask);
  })
}

function projectForm() {

  const form = document.querySelector('.project-form');
  const addProjectBtn = document.querySelector('.add-project-btn');
  const addBtn = form.querySelector('.add-btn');
  const cancelBtn = form.querySelector('.cancel-btn');
  const input = form.querySelector('input');

  addProjectBtn.addEventListener('click', () => {
    form.style.display = 'flex';
    addProjectBtn.style.display = 'none';
  })

  cancelBtn.addEventListener('click', () => {
    addProjectBtn.style.display = 'flex';
    form.style.display = 'none';
    input.value = '';
  })

  addBtn.addEventListener('click', () => {
    if (input.value === '') {
      alert('Enter the name of the Project !!!');
      return;
    }

    pushProject(input.value);
    renderProjectHtml();
    toggleBtnClass();
    renderSelectOptions();

    addProjectBtn.style.display = 'flex';
    form.style.display = 'none';
    input.value = '';
  })
}

function renderSelectOptions() {
  const select = document.querySelector('#task-project-select')
  select.innerHTML = '<option value="" disabled selected>Select a Project</option>';
  projects.forEach((project) => {
    const option = document.createElement('option');
    option.value = project.name;
    option.text = project.name;
    select.appendChild(option);
  })
}

function taskForm() {
  const taskForm = document.querySelector('.add-task-form');
  const addTaskBtn = document.querySelector('.add-task-btn');
  const input = taskForm.querySelector('input');
  const select = taskForm.querySelector('select');
  const addBtn = taskForm.querySelector('.add-btn');
  const cancelBtn = taskForm.querySelector('.cancel-btn');

  addTaskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
    addTaskBtn.style.display = 'none';
  })

  addBtn.addEventListener('click', () => {
    const clicked = document.querySelector('.btn-clicked');

    if (input.value === '') {
      alert('Enter the Task Name !!!');
      return;
    }

    if (select.value === '') {
      alert('Select the Project !!!');
      return;
    }

    pushTaskProject(input.value, select.value);
    clicked.click();

    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'flex';
    input.value = '';
    select.value = '';
  })

  cancelBtn.addEventListener('click', () => {
    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'flex';
    input.value = '';
    select.value = '';
  })

}

function runFunctions() {

  renderProjectHtml();
  renderTaskHtml(allTask);
  toggleBtnClass();
  renderProjectTask();
  renderAllTasks();
  projectForm();
  taskForm();
  renderSelectOptions();
}

runFunctions()