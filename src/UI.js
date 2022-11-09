import { Project } from './Project';
import { Todolist } from './Todolist';

function createProjBtn(name) {
  const projList = document.getElementById('project-list');

  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.classList.add('project');
  btn.textContent = name;

  li.appendChild(btn);
  projList.appendChild(li);
}
function populateProjects(todoList) {
  todoList.projects.forEach((proj) => createProjBtn(proj.getName()));
}
function clearTaskContainer() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.textContent = '';
}
function populateTask(taskObject, elem) {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = taskObject.getTitle()

    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent = taskObject.getDate()

    task.appendChild(taskName)
    task.appendChild(taskDate)
    elem.appendChild(task);
}
function populateTaskContainer(projectName) {
    clearTaskContainer();
    projectObj = app.findProj(projectName);
    const taskContainer = document.getElementById('task-container');
    projectObj.todoList.forEach(task => {populateTask(task, taskContainer)});
}
function populateProjectTitle(project) {
    const projectName = document.getElementById('project-name');
    projectName.textContent = project
}
function listenProjBtn() {
    const projectsButtons = document.querySelectorAll('.');
projectsButtons.forEach(button => button.addEventListener('onclick', populateTaskContainer(button.textContent)));
}


export { createProjBtn, populateProjects, populateProjectTitle, clearTaskContainer, populateTask, populateTaskContainer,listenProjBtn };
