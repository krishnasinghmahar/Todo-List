import { pushProject } from "./data.js";

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

    addProjectBtn.style.display = 'flex';
    form.style.display = 'none';
    input.value = '';
  })
}
