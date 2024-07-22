const gpTasks = document.querySelectorAll('.gp-tasks');
let mainHeading = document.querySelector('main h1');

function handleElementClick(event) {
  mainHeading.innerHTML = event.srcElement.innerText;

  gpTasks.forEach(element => element.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

gpTasks.forEach(element => {
  element.addEventListener('click', handleElementClick);
});