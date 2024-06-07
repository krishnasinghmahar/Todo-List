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
      <span>
        ${project.name}
      </span>
    </div>
  `
  })

  document.querySelector('.project-list-container').innerHTML = projectHTML;
}

renderProjectHtml();

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

renderTaskHtml();

document.querySelectorAll('.btn-container').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('btn-clicked');
    console.log(button);
  })
})