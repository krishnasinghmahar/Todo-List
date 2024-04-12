// import { projects } from "./data";
import { DateTime } from 'luxon';

const projectsData = localStorage.getItem('projects');
const projects = projectsData ? JSON.parse(projectsData) : [];

const ulProject = document.querySelector('.projects-list');
const ulTask = document.querySelector('.task-list');
const h2Project = document.querySelector('.project-heading');


ulProject.addEventListener('click', (e) => {
    const clickedLi = e.target.closest('li');
    if (clickedLi && ulProject.contains(clickedLi)) {
        h2Project.textContent = e.target.textContent;

        const clickedProjectName = e.target.textContent;
        const clickedProject = projects.find(project => project.projectName === clickedProjectName);

        if (clickedProject) {
            renderTasksForProject(clickedProject);
        }
    }
});


function renderTasksForProject(project) {

    ulTask.innerHTML = '';

    const taskTemplate = document.querySelector('#task-template');

    project.tasks.forEach(task => {
        const clonedTemplate = document.importNode(taskTemplate.content, true);
        const taskName = clonedTemplate.querySelector('.task-title');
        const taskDescription = clonedTemplate.querySelector('.task-description');
        const taskItem = clonedTemplate.querySelector('.task');
        const dueDate = clonedTemplate.querySelector('.due-date');
        const checkbox = clonedTemplate.querySelector('.checkbox');

        taskName.textContent = task.title;
        taskDescription.textContent = task.description;
        dueDate.textContent = task.date;

        taskItem.classList.remove('low', 'medium', 'high');

        checkbox.checked = task.completed;

        if (checkbox.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }

        if (task.priority === 'Low') {
            taskItem.classList.add('low');
        } else if (task.priority === 'Medium') {
            taskItem.classList.add('medium');
        } else if (task.priority === 'High') {
            taskItem.classList.add('high');
        }

        ulTask.appendChild(clonedTemplate);
    });
}



// task form

const openTaskBtn = document.querySelector('.add-task');
const taskForm = document.querySelector('.task-form');
const submitBtn = document.querySelector('#task-submit-btn');
const cancelBtn = document.querySelector('#task-cancel-btn');
const inputTask = document.querySelector('#task-input');
const inputTaskDescription = document.querySelector('#task-description');

// Event listeners

openTaskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex';
    openTaskBtn.style.display = 'none';
})

// submit form

const dateInput = document.querySelector('#date-input');
const priorityInput = document.querySelector('#priority-input');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputTask.value === '') {
        alert('Enter the name of task');
        return;
    }

    const selectedDate = DateTime.fromISO(dateInput.value);
    const formattedDate = selectedDate.toLocaleString({ month: 'short', day: '2-digit' });
    const projectName = h2Project.textContent.trim();

    const projectIndex = projects.findIndex(project => project.projectName === projectName);

    if (projectIndex !== -1) {
        const project = projects[projectIndex];
        const newTask = {
            title: inputTask.value,
            date: formattedDate,
            priority: priorityInput.value,
            description: inputTaskDescription.value,
            completed: false
        };

        // Add the new task to the project's tasks array
        project.tasks.push(newTask);

        // Update local storage with the modified projects array
        localStorage.setItem('projects', JSON.stringify(projects));

        // Render the updated task list for the project
        renderTasksForProject(project);

        taskForm.style.display = 'none';
        openTaskBtn.style.display = 'block';
    } else {
        alert('No project selected');
    }

    inputTask.value = '';
    dateInput.value = '';
    priorityInput.value = '';

    console.log(projects);
});

cancelBtn.addEventListener('click', () => {
    taskForm.style.display = 'none';
    openTaskBtn.style.display = 'block';
});

// remove task

ulTask.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-trash')) {
        const taskItem = e.target.closest('.task');
        const taskTitle = taskItem.querySelector('.task-title').textContent.trim();

        const projectName = h2Project.textContent.trim();

        const projectIndex = projects.findIndex(project => project.projectName === projectName);

        if (projectIndex !== -1) {
            const project = projects[projectIndex];
            const taskIndex = project.tasks.findIndex(task => task.title === taskTitle);
            if (taskIndex !== -1) {
                // Remove the task from the project's tasks array
                project.tasks.splice(taskIndex, 1);

                // Update local storage with the modified projects array
                localStorage.setItem('projects', JSON.stringify(projects));

                // Render the updated task list for the project
                renderTasksForProject(project);
            }
        }
    }
});


// checkBox

ulTask.addEventListener('change', (e) => {
    let projectNames = [];

    projects.forEach(project => {
        projectNames.push(project.projectName);
    });

    if (e.target.classList.contains('checkbox')) {
        const taskItem = e.target.closest('.task');
        const h2 = document.querySelector('.project-heading');

        if (e.target.checked) {
            taskItem.classList.add('completed');
        } else {
            taskItem.classList.remove('completed');
        }

        const taskIndex = Array.from(taskItem.parentNode.children).indexOf(taskItem);
        const projectIndex = projectNames.indexOf(h2.textContent);

        // Update the completion status of the task in the projects array
        projects[projectIndex].tasks[taskIndex].completed = e.target.checked;

        // Update local storage with the modified projects array
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

//info section

const taskContainer = document.querySelector('.task-list');
const popup = document.getElementById('popup');

const popupContent = document.querySelector('.popup-content');

taskContainer.addEventListener('click', (event) => {

    if (event.target.classList.contains('fa-circle-info')) {
        const task = event.target.closest('.task');

        const taskTitle = task.querySelector('.task-title').textContent;
        const dueDate = task.querySelector('.due-date').textContent;
        const description = task.querySelector('.task-description').textContent;

        popupContent.innerHTML = `
      <h2>${taskTitle}</h2>
      <p>Due Date: ${dueDate}</p>
      <p>Description: ${description}</p>
    `;

        const iconBounds = event.target.getBoundingClientRect();
        const popupHeight = popup.offsetHeight;
        const popupWidth = popup.offsetWidth;

        popup.style.top = `${iconBounds.top - popupHeight - 10}px`; // Adjust for spacing
        popup.style.left = `${iconBounds.left - (popupWidth / 2) + (iconBounds.width / 2)}px`; // Center horizontally

        popup.style.display = 'block';
    }
});


window.addEventListener('click', (event) => {
    if (!event.target.matches('#info-icon') && !event.target.matches('.popup')) {
        popup.style.display = 'none';
    }
});

