import { renderProjectHtml, toggleBtnClass } from "./script.js"

export const projects = [{
  name: 'Project 1',
  tasks: [{
    name: 'Task 1'
  },
  {
    name: 'Task 2'
  },
  {
    name: 'Task 3'
  }]
},
{
  name: 'Project 2',
  tasks: [{
    name: 'Task 4'
  },
  {
    name: 'Task 5'
  },
  {
    name: 'Task 6'
  }]
},
{
  name: 'Project 3',
  tasks: [{
    name: 'Task 7'
  },
  {
    name: 'Task 8'
  },
  {
    name: 'Task 9'
  }]
}]

export const inboxTask = [{
  name: 'Inbox Task 1'
},
{
  name: 'Inbox Task 2'
},
{
  name: 'Inbox Task 3'
}]

export function pushProject(name) {
  projects.push({
    name: name,
    tasks: []
  })
  renderProjectHtml();
  toggleBtnClass();
}

export const allTask = []

function pushTask() {
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      allTask.push(task);
    })
  })
}
pushTask();

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
