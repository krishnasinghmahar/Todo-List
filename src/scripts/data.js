import { v4 as uuidv4 } from 'uuid';
import { renderTaskContainer } from './main';

const projects = [
  {
    id: uuidv4(),
    name: 'Project 1',
    tasks: [
      {
        name: 'Task 1',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      },
      {
        name: 'Task 2',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Project 2',
    tasks: [
      {
        name: 'Task 3',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      },
      {
        name: 'Task 4',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Project 3',
    tasks: [
      {
        name: 'Task 5',
        details: 'something...',
        date: '30 july',
        priority: 'low'
      },
      {
        name: 'Task 6',
        details: 'something...',
        date: '30 july',
        priority: 'low'
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
  projects.forEach(project => {
    if (project.id === projectId) {
      project.tasks.push({
        name: taskName,
        details: taskDetails,
        date: taskDate,
        priority: taskPriority
      })
      renderTaskContainer(project.tasks)
    }
  })
  console.log(projects)
  pushToAllTasks()
}

function renameProject(newName, projectId) {
  projects.forEach(project => {
    if(project.id === projectId){
      project.name =  newName
    }
  })
}

pushToAllTasks()

export { projects, allTasks, pushProject, pushTask, removeProject,renameProject }