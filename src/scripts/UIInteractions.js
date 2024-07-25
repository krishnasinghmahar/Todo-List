import { projects, allTasks } from "./data";
import { renderTaskContainer, taskContainer, hideAddTaskButton, showAddTaskButton } from "./UI";

const gpAsideButtons = document.querySelectorAll('.gp-tasks');
const gpProjectButtons = document.querySelectorAll('.project');
let mainHeading = document.querySelector('main h1');

function handleElementClick(event) {
  mainHeading.innerHTML = event.srcElement.innerText;

  gpAsideButtons.forEach(element => element.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

gpAsideButtons.forEach(element => {
  element.addEventListener('click', handleElementClick);
});

gpAsideButtons[0].addEventListener('click', () => {
  renderTaskContainer(allTasks)
  hideAddTaskButton()
})

gpAsideButtons[1].addEventListener('click', () => {
  // Add the feature
  taskContainer.innerHTML = ''
  hideAddTaskButton()
})

gpAsideButtons[2].addEventListener('click', () => {
  // Add the feature
  taskContainer.innerHTML = ''
  hideAddTaskButton()
})

gpProjectButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    renderTaskContainer(projects[index].tasks)
    showAddTaskButton()
  })
})