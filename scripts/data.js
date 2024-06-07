export const projects = [{
  name: 'Project 1',
  tasks: [{
    name: 'Task 1'
  },
  {
    name: 'Task 2'
  },
  {
    name: 'Task 3'
  }]
},
{
  name: 'Project 2',
  tasks: [{
    name: 'Task 4'
  },
  {
    name: 'Task 5'
  },
  {
    name: 'Task 6'
  }]
},
{
  name: 'Project 3',
  tasks: [{
    name: 'Task 7'
  },
  {
    name: 'Task 8'
  },
  {
    name: 'Task 9'
  }]
}]


export const allTask = []

function pushTask() {
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      allTask.push(task);
    })
  })
}
pushTask();

