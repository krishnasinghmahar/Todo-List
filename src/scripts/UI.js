import allTaskIcon from '../icons/inbox.png'
import todayIcon from '../icons/today1.png'
import thisWeekIcon from '../icons/week2.png'
import { projects } from './data'

const allTaskButton = document.querySelector('.all-task-button')
const todayButton = document.querySelector('.today-button')
const thisWeekButton = document.querySelector('.this-week-button')
const projectContainer = document.querySelector('.project-container')

allTaskButton.innerHTML = `
  <img src=${allTaskIcon}>
  <h3>All Tasks</h3>
`

todayButton.innerHTML = `
  <img src=${todayIcon}>  
   <h3>Today</h3>
`

thisWeekButton.innerHTML = `
  <img src=${thisWeekIcon}>
  <h3>This week</h3>
`

projectContainer.innerHTML = ''
projects.forEach(project=>{
  projectContainer.innerHTML += `
      <div>
        <i class="fa-solid fa-list"></i>
        <h3>${project.name}</h3>
      </div>
  `
})