import { allTasks, deleteTask, editTask, findProject, findTask, next7daysTasks, pushTask, pushToAllTasks, pushToNext7DaysTasks, pushToTodayTasks, todayTasks, toggleDoneTask } from "./data";

const mainHeading = document.querySelector('main h1');
const taskContainer = document.querySelector('.task-container')
const addTaskButton = document.querySelector('main .add-task')
const addTaskForm = document.querySelector('main .add-task-form')
const taskName = addTaskForm.querySelector('.task-name')
const taskDetails = addTaskForm.querySelector('.task-details')
const taskDate = addTaskForm.querySelector('.date')
const taskPriority = addTaskForm.querySelector('.priority')
const cancelTaskForm = addTaskForm.querySelector('.cancel')

// UI

function renderTaskContainer(tasks) {
  taskContainer.innerHTML = ''
  tasks.forEach(task => {
    taskContainer.innerHTML += `
    <div class="task ${task.taskDone && 'done-task'} ${renderTaskColor(task.priority)}" data-task-id=${task.id}>
      <label class="custom-checkbox">
        <input type="checkbox" class="checkbox" ${task.taskDone && 'checked'} >
        <span class="checkMark"></span>
        <p>${task.name}</p>
      </label>
      <div class="task-buttons">
        <i class="fa-solid fa-circle-info hover"></i>
        <p class="due-date">${formatDate(task.date)}</p>
        <i class="fa-solid fa-pen-to-square hover"></i>
        <i class="fa-solid fa-trash-can hover"></i>
      </div>
    </div>
  `
  })
}

function renderTaskColor(priority) {
  if (priority === 'high') {
    return 'red'
  } else if (priority === 'low') {
    return 'green'
  } else if (priority === 'medium') {
    return 'yellow'
  } else {
    return 'white'
  }
}

function hideAddTaskButton() {
  addTaskButton.style.display = 'none'
}

function showAddTaskButton() {
  addTaskButton.style.display = 'flex'
}

function hideAddTaskForm() {
  addTaskForm.style.display = 'none'
  resetTaskForm()
}

function showAddTaskForm() {
  const input = addTaskForm.querySelector('.task-name')
  addTaskForm.style.display = 'block'
  input.focus()
}

function resetTaskForm() {
  taskName.value = ''
  taskDate.value = ''
  taskDetails.value = ''
  taskPriority.value = ''
}

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const formattedDate = `${day} ${month}`;
  return formattedDate
}

// event handlers

function handleAddTaskBtn() {
  hideAddTaskButton()
  showAddTaskForm()
}

function handleAddTaskForm(e) {
  e.preventDefault()
  const activeClass = document.querySelector('.active');
  const projectId = activeClass.dataset.id;

  pushTask(taskName.value, taskDate.value, taskPriority.value, taskDetails.value, projectId)
  resetTaskForm()
}

function handleEnterKey(e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    const submitBtn = addTaskForm.querySelector('.submit')
    submitBtn.click()
  }
}

function handleCancelTaskForm(e) {
  e.preventDefault()
  showAddTaskButton()
  hideAddTaskForm()
  resetTaskForm()
}

function handleTaskContainer(e) {
  const element = e.target
  const taskId = element.closest('.task').dataset.taskId
  const activeElement = document.querySelector('.active')

  function renderActiveContainer(activeElement) {
    if (activeElement.dataset.id === undefined) {
      if (activeElement.classList.contains('all-task-button')) {
        pushToAllTasks()
        renderTaskContainer(allTasks)
      } else if (activeElement.classList.contains('today-button')) {
        pushToTodayTasks()
        renderTaskContainer(todayTasks)
      } else if (activeElement.classList.contains('this-week-button')) {
        pushToNext7DaysTasks()
        renderTaskContainer(next7daysTasks)
      }
    } else {
      const projectId = activeElement.dataset.id
      const project = findProject(projectId)
      renderTaskContainer(project.tasks)
    }
  }

  function renderDialogBox(task) {
    let dialog = document.querySelector('.task-details-dialog');

    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'task-details-dialog';
      document.body.appendChild(dialog);
    }
    dialog.innerHTML = `
  <div class="dialog-heading">
    <h2>${task.name}</h2>
      <form method="dialog">
          <button class="hover">X</button>
      </form>
  </div>
  <br>
  <div class="dialog-details">
    <p><b>Details:</b> ${task.details} </p><br>
    <p><b>Priority:</b>  ${task.priority} </p><br>
    <p><b>Due-Date:</b>  ${task.date} </p>
  </div>     
    `;
  }

  function renderEditTaskForm(task) {
    let dialog = document.querySelector('.task-edit-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'task-edit-dialog';
      document.body.appendChild(dialog);
    }

    dialog.innerHTML = `
    <div class="dialog-heading">
      <h2>Edit Task Form</h2>
      <form method="dialog">
        <button class="hover">X</button>
      </form>
    </div>
    <br>
    <form class="edit-task">
      <label>
      Title:
        <input type="text" class="edit-task-name" placeholder="Task title" value="${task.name}">
      </label><br><br>
      <label class="edit-details-label">
      Details:
        <textarea class="edit-details" placeholder="Task details">${task.details}</textarea>
      </label>
       <label><br>
        Priority:
        <select class="priority">
          <option value="No priority" ${task.priority === "No priority" ? "selected" : ""}>No Priority</option>
          <option value="low" ${task.priority === "low" ? "selected" : ""}>Low </option>
          <option value="medium" ${task.priority === "medium" ? "selected" : ""}>Medium </option>
          <option value="high" ${task.priority === "high" ? "selected" : ""}>High</option>
        </select>
      </label><br><br>
      <label class="edit-date-label">
        Date:
        <input type="date" class="edit-date" value="${task.date}">
      </label>
      <div class="button-container">
        <button class="submit">Submit</button>
      </div>
    </form>
  `
  }


  // delete task
  if (element.classList.contains('fa-trash-can')) {
    deleteTask(taskId)
    renderActiveContainer(activeElement)
  }

  // checkbox
  if (element.classList.contains('checkbox')) {
    if (element.checked) {
      toggleDoneTask(taskId)
    } else {
      toggleDoneTask(taskId)
    }
    renderActiveContainer(activeElement)
  }

  // Info
  if (element.classList.contains('fa-circle-info')) {
    const taskDetails = findTask(taskId)
    renderDialogBox(taskDetails)
    const dialog = document.querySelector('.task-details-dialog');
    dialog.showModal();
  }

  // Edit-Task-Button
  if (element.classList.contains('fa-pen-to-square')) {
    const taskDetails = findTask(taskId)
    renderEditTaskForm(taskDetails)
    const dialog = document.querySelector('.task-edit-dialog');
    dialog.showModal();

    const editForm = dialog.querySelector('.edit-task')
    const submitBtn = editForm.querySelector('.submit')

    submitBtn.addEventListener('click', handleSubmitBtn)


    function handleSubmitBtn(e) {
      e.preventDefault()
      const inputValue = editForm.querySelector('input').value
      const textareaValue = editForm.querySelector('textarea').value
      const selectValue = editForm.querySelector('select').value
      const dateValue = editForm.querySelector('.edit-date').value

      editTask(inputValue, dateValue, selectValue, textareaValue, taskDetails.id)
      dialog.close()
      renderActiveContainer(activeElement)
    }
  }
}

// UI interactions Form

addTaskButton.addEventListener('click', handleAddTaskBtn)
addTaskForm.addEventListener('submit', handleAddTaskForm)
addTaskForm.addEventListener('keydown', handleEnterKey)
cancelTaskForm.addEventListener('click', handleCancelTaskForm)
taskContainer.addEventListener('click', handleTaskContainer)


function runMain() {
  renderTaskContainer(allTasks)
  hideAddTaskButton()
  hideAddTaskForm()
}

export { mainHeading, renderTaskContainer, hideAddTaskButton, taskContainer, showAddTaskButton, hideAddTaskForm, runMain }
