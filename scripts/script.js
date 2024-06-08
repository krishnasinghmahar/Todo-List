import { projects, allTask, inboxTask, pushProject, pushTaskInbox } from "./data.js";


export function renderProjectHtml() {
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

export function toggleBtnClass() {
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

function renderInbox() {
  document.querySelector('.js-inbox-btn').addEventListener('click', () => {
    renderTaskHtml(inboxTask);
  })
}

export function projectForm() {

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

    addProjectBtn.style.display = 'flex';
    form.style.display = 'none';
    input.value = '';
  })
}

function taskForm() {
  const taskForm = document.querySelector('.add-task-form');
  const addTaskBtn = document.querySelector('.add-task-btn');
  const input = taskForm.querySelector('input');
  const addBtn = taskForm.querySelector('.add-btn');
  const cancelBtn = taskForm.querySelector('.cancel-btn');

  addTaskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
    addTaskBtn.style.display = 'none';
  })

  addBtn.addEventListener('click', () => {
    if (input.value === '') {
      alert('Enter the Task Name !!!');
      return;
    }

    pushTaskInbox(input.value);
    renderTaskHtml(inboxTask);

    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'flex';
    input.value = '';
  })

  cancelBtn.addEventListener('click', () => {
    taskForm.style.display = 'none';
    addTaskBtn.style.display = 'flex';
    input.value = '';
  })

}

function runFunctions() {
  renderProjectHtml();
  renderTaskHtml(inboxTask);
  toggleBtnClass();
  renderProjectTask();
  renderInbox();
  projectForm();
  taskForm();
}

runFunctions()