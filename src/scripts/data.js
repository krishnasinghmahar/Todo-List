import { v4 as uuidv4 } from 'uuid';
import { renderTaskContainer } from './main';

const projects = [
  {
    id: uuidv4(),
    projectName: 'Project 1',
    tasks: [
      {
        taskName: 'Task 1'
      },
      {
        taskName: 'Task 2'
      }
    ]
  },
  {
    id: uuidv4(),
    projectName: 'Project 2',
    tasks: [
      {
        taskName: 'Task 3'
      },
      {
        taskName: 'Task 4'
      }
    ]
  },
  {
    id: uuidv4(),
    projectName: 'Project 3',
    tasks: [
      {
        taskName: 'Task 5'
      },
      {
        taskName: 'Task 6'
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
    projectName: projectName,
    tasks: []
  })
}

function pushTask(taskName, projectId) {
  projects.forEach(project => {
    if (project.id === projectId) {
      project.tasks.push({ taskName: taskName })
      renderTaskContainer(project.tasks)
    }
  })
  pushToAllTasks()
}

pushToAllTasks()

export { projects, allTasks, pushProject, pushTask }