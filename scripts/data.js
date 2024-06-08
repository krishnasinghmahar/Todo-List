import { renderProjectHtml, toggleBtnClass } from "./script.js"

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

export const inboxTask = [{
  name: 'Inbox Task 1'
},
{
  name: 'Inbox Task 2'
},
{
  name: 'Inbox Task 3'
}]

export function pushProject(name) {
  projects.push({
    name: name,
    tasks: []
  })
}

export function pushTaskInbox(name) {
  inboxTask.push({ name });
}


export const allTask = []

function pushTask() {
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      allTask.push(task);
    })
  })
}
pushTask();

