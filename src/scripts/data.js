import { v4 as uuidv4 } from 'uuid';
import { renderTaskContainer } from './main';

let projects;

loadFromStorage()

function loadFromStorage() {
  projects = JSON.parse(localStorage.getItem('projects')) || [
    {
      id: uuidv4(),
      name: 'Expense Tracker',
      tasks: [
        {
          id: uuidv4(),
          name: 'Data Structure',
          details: 'Design a data structure to store expense data. Consider fields like date, category, amount, description, and payment method.',
          date: calculateDate(0),
          priority: 'high',
          taskDone: true
        },
        {
          id: uuidv4(),
          name: 'User Interface',
          details: 'Create a user-friendly interface for recording expenses, viewing summaries, and generating reports.',
          date: calculateDate(4),
          priority: 'medium',
          taskDone: false
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'To-Do List App',
      tasks: [
        {
          id: uuidv4(),
          name: 'Task Management',
          details: 'Implement features to add, edit, and delete tasks.',
          date: calculateDate(0),
          priority: 'high',
          taskDone: false
        },
        {
          id: uuidv4(),
          name: 'Prioritization',
          details: 'Allow users to prioritize tasks using labels, tags, or a custom system.',
          date: calculateDate(6),
          priority: 'No priority',
          taskDone: false
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'Simple Game',
      tasks: [
        {
          id: uuidv4(),
          name: 'Game Concept',
          details: 'Choose a game concept (e.g., puzzle, arcade, strategy) and define its rules and mechanics.',
          date: calculateDate(0),
          priority: 'low',
          taskDone: false
        },
        {
          id: uuidv4(),
          name: 'Game Engine',
          details: 'Select a suitable game engine or framework (e.g., Unity, Godot) to build the game.',
          date: calculateDate(10),
          priority: 'low',
          taskDone: true
        }
      ]
    }
  ]
}

function saveToStorage(){
  localStorage.setItem('projects', JSON.stringify(projects));
}

let allTasks = []
let todayTasks = []
let next7daysTasks = []

// For UI

function pushToTodayTasks() {
  todayTasks = []
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (isDateToday(task.date)) {
        todayTasks.push(task)
      }
    })
  })
}

function pushToNext7DaysTasks() {
  next7daysTasks = []
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (isDateInNext7Days(task.date)) {
        next7daysTasks.push(task)
      }
    })
  })
}

function isDateInNext7Days(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0);

  const sevenDaysLater = new Date(today);
  sevenDaysLater.setDate(today.getDate() + 7);

  return inputDate > today && inputDate <= sevenDaysLater;
}

function isDateToday(inputDate) {
  const today = new Date();
  const todayFormatted = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');
  return todayFormatted === inputDate
}

function calculateDate(days) {
  const today = new Date();

  today.setDate(today.getDate() + days);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return year + '-' + month + '-' + day;
}

function pushToAllTasks() {
  allTasks = []
  projects.forEach(project => project.tasks.forEach(task => allTasks.push(task)))
}

// Editing Projects Object

function pushProject(projectName) {
  projects.push({
    id: uuidv4(),
    name: projectName,
    tasks: []
  })
  saveToStorage()
}

function removeProject(projectId) {
  const projectIndex = projects.findIndex(project => project.id === projectId);
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
  }
  pushToAllTasks()
  pushToTodayTasks()
  pushToNext7DaysTasks()
  saveToStorage()
}


function renameProject(newName, projectId) {
  projects.forEach(project => {
    if (project.id === projectId) {
      project.name = newName
    }
  })
  saveToStorage()
}

function pushTask(taskName, taskDate, taskPriority, taskDetails, projectId) {
  if (taskDetails === '') {
    taskDetails = 'No details'
  }
  if (taskPriority === '') {
    taskPriority = 'No priority'
  }
  projects.forEach(project => {
    if (project.id === projectId) {
      project.tasks.push({
        id: uuidv4(),
        name: taskName,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority,
        taskDone: false
      })
      renderTaskContainer(project.tasks)
    }
  })
  pushToAllTasks()
  pushToTodayTasks()
  pushToNext7DaysTasks()
  saveToStorage()
}

function deleteTask(taskId) {
  projects.forEach(project => {
    const taskIndex = project.tasks.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1)
    }
  })
  pushToAllTasks()
  pushToTodayTasks()
  pushToNext7DaysTasks()
  saveToStorage()
}

function toggleDoneTask(taskId) {
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (task.id === taskId) {
        task.taskDone = !task.taskDone
      }
    })
  })
  saveToStorage()
}

function editTask(title, date, priority, details, taskId) {
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (task.id === taskId) {
        task.name = title
        task.date = date
        task.priority = priority
        task.details = details
      }
    })
  })
  saveToStorage()
}

// finding data


function findTask(taskId) {
  let matchedTask;
  projects.forEach(project => {
    project.tasks.forEach(task => {
      if (task.id === taskId) {
        matchedTask = task
      }
    })
  })
  return matchedTask
}

function findProject(projectId) {
  let returnObject
  projects.map(project => {
    if (project.id === projectId) {
      returnObject = project
    }
  })
  return returnObject
}


pushToAllTasks()
pushToTodayTasks()
pushToNext7DaysTasks()

export { projects, allTasks, pushProject, pushTask, removeProject, renameProject, deleteTask, findProject, toggleDoneTask, findTask, editTask, todayTasks, next7daysTasks, pushToNext7DaysTasks, pushToTodayTasks, pushToAllTasks }