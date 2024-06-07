import { projects } from "./data.js";
import { tasks } from "./data.js";


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


function renderTaskHtml() {
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


renderProjectHtml();
renderTaskHtml();
toggleBtnClass();