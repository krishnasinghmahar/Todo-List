import { v4 as uuidv4 } from 'uuid';
import { renderTaskContainer } from './main';

const projects = [
  {
    id: uuidv4(),
    name: 'Project 1',
    tasks: [
      {
        id: uuidv4(),
        name: 'Task 1',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      },
      {
        id: uuidv4(),
        name: 'Task 2',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Project 2',
    tasks: [
      {
        id: uuidv4(),
        name: 'Task 3',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      },
      {
        id: uuidv4(),
        name: 'Task 4',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Project 3',
    tasks: [
      {
        id: uuidv4(),
        name: 'Task 5',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      },
      {
        id: uuidv4(),
        name: 'Task 6',
        details: 'something...',
        date: '30 july',
        priority: 'low',
        taskDone: false
      }
    ]
  }
]

let allTasks = []

function pushToAllTasks() {
  allTasks = []
  projects.forEach(project => project.tasks.forEach(task => allTasks.push(task)))
}

function pushProject(projectName) {
  projects.push({
    id: uuidv4(),
    name: projectName,
    tasks: []
  })
}

function removeProject(projectId) {
  const projectIndex = projects.findIndex(project => project.id === projectId);
  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
  }
  pushToAllTasks()
}

function pushTask(taskName, taskDate, taskPriority, taskDetails, projectId) {
  if (taskDate === '') {
    taskDate = 'no date'
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
}

function findProject(projectId) {
  let returnObject
  projects.map(project => {
    if (project.id === projectId) {
      returnObject =  project
    }
  })
  return returnObject
}

function renameProject(newName, projectId) {
  projects.forEach(project => {
    if (project.id === projectId) {
      project.name = newName
    }
  })
}

function deleteTask(taskId) {
  projects.forEach(project => {
    const taskIndex = project.tasks.findIndex(task => task.id === taskId)
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1)
    }
  })
  pushToAllTasks()
}

pushToAllTasks()

export { projects, allTasks, pushProject, pushTask, removeProject, renameProject, deleteTask, findProject }