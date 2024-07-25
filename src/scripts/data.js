export const projects = [
  {
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

export const allTasks = []

function pushToAllTasks() {
  projects.forEach(project => project.tasks.forEach(task => allTasks.push(task)))
}

pushToAllTasks()