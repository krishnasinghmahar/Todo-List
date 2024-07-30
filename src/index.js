// js import
import { runAside } from "./scripts/aside"
import { runMain } from "./scripts/main"

// css imports
import './styles/index.css'
import './styles/aside.css'
import './styles/main.css'
import icon from './icons/check_logo.png'

function webPageTitle() {
  const link = document.createElement('link')
  link.rel = 'icon';
  link.href = icon;
  document.head.appendChild(link)
}

webPageTitle()

runMain()
runAside()