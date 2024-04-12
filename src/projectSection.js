// import { projects } from './data.js'

const projectsData = localStorage.getItem('projects');
const projects = projectsData ? JSON.parse(projectsData) : [];

// ==>PROJECT SECTION

// =>HTML elements

const addProjectBtn = document.querySelector('.add-project-btn');
const ulProject = document.querySelector('.projects-list');
const projectForm = document.querySelector('.project-form');
const submitBtn = document.querySelector('#project-submit-btn');
const cancelBtn = document.querySelector('#project-cancel-btn');
const input = document.querySelector('#project-input');

// =>event listener

addProjectBtn.addEventListener('click', openForm);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addProject();
    addProjectBtn.style.display = 'block';
    projectForm.style.display = 'none'
});

cancelBtn.addEventListener('click', closeForm);


// => functions

function openForm() {
    addProjectBtn.style.display = 'none';
    projectForm.style.display = 'flex';

}

function closeForm() {
    addProjectBtn.style.display = 'block';
    projectForm.style.display = 'none'
}

function addProject() {
    if (input.value === '') {
        alert('Enter the name of project');
        return;
    }

    const newProject = {
        projectName: input.value,
        tasks: [],
    }

    projects.push(newProject);

    const updatedProjectsJSON = JSON.stringify(projects);
    localStorage.setItem('projects', updatedProjectsJSON);

    renderProjectList();
    window.location.reload();
    input.value = '';
}

function renderProjectList() {
    ulProject.innerHTML = '';
    projects.forEach((project, index) => {

        // Add project
        const newLi = document.createElement('li');
        newLi.classList.add('project-list');
        newLi.innerHTML = `<p>${project.projectName}</p><i class="fa-solid fa-trash"></i>`;
        ulProject.appendChild(newLi);

        // Remove project
        const trashIcon = newLi.querySelector('.fa-trash');
        trashIcon.addEventListener('click', () => {
            // Remove the project from the projects array
            projects.splice(index, 1);

            // Update local storage with the modified projects array
            const updatedProjectsJSON = JSON.stringify(projects);
            localStorage.setItem('projects', updatedProjectsJSON);

            // Remove the project from the DOM
            newLi.remove();
        });
    });
}


renderProjectList();

