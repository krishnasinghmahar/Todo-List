const h2Tag = document.querySelector('#h2-tag');
const inbox = document.querySelector('#inbox-btn');
const today = document.querySelector('#today-btn');
const thisWeek = document.querySelector('#this-week-btn');
const projectList = document.querySelector('.projects')
const projects = projectList.querySelectorAll('li');
const addProject = document.querySelector('.add-project');
const projectInput = document.querySelector('#project-input');
const closeDialog = document.querySelector('#close-dialog');
const submitDialog = document.querySelector('#submit');
const projectNameInput = document.querySelector('#project-name');

inbox.addEventListener('click', () => {
    h2Tag.textContent = '📥 Inbox';
});

today.addEventListener('click', () => {
    h2Tag.textContent = '📅 Today';
});

thisWeek.addEventListener('click', () => {
    h2Tag.textContent = '🗓️ This week';
});



addProject.addEventListener('click', () => {
    projectInput.showModal();
});

closeDialog.addEventListener('click', () => {
    projectInput.close();
});

submitDialog.addEventListener('click', () => {
    const projectName = projectNameInput.value;

    if (projectName === '') {
        alert('Enter the Name of Project');
        return;
    }

    const li = document.createElement('li');
    li.textContent = projectName;
    projectList.appendChild(li);
    projectNameInput.value = '';
    projectInput.close();
});

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI' && event.target.parentNode.classList.contains('projects')) {
        h2Tag.textContent = `🗓️ ${event.target.textContent}`;
    }
});



// Add Tasks

const addTask = document.querySelector('.add-task');
const taskList = document.querySelector('.task');
const taskDialog = document.querySelector('#task-input');
const closeTask = document.querySelector('#close-task-dialog');
const submitTask = document.querySelector('#submit-task');

addTask.addEventListener('click', () => {
    taskDialog.showModal();
});

closeTask.addEventListener('click', () => {
    taskDialog.close();
});

submitTask.addEventListener('click', () => {
    createTask();
    taskDialog.close();
});

function createTask() {
    const li = document.createElement('li');
    taskList.appendChild(li);
}