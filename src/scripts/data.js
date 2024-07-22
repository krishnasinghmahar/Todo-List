export const projects = [
  {
    projectName: 'Project 1',
    tasks: [
      {
        taskName: 'Task 1'
      },
      {
        taskName: 'Task 2'
      },
      {
        taskName: 'Task 3'
      }
    ]
  },
  {
    projectName: 'Project 2',
    tasks: [
      {
        taskName: 'Task 4'
      },
      {
        taskName: 'Task 5'
      },
      {
        taskName: 'Task 6'
      }
    ]
  },
  {
    projectName: 'Project 3',
    tasks: [
      {
        taskName: 'Task 7'
      },
      {
        taskName: 'Task 8'
      },
      {
        taskName: 'Task 9'
      }
    ]
  }
]

export const allTasks = []

projects.forEach(project => project.tasks.forEach(task => allTasks.push(task)))