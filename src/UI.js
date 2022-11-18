import Project from './Project';
import Library from './Library';
import Task from './Task';

const app = Library();

const firstTask = Task('Du boulot', 'Une longue description', '20-03-2022');
const secondTask = Task('un truc a faire', 'Une longue description', '20-03-2022');
const thirdTask = Task('Du boulotrtertet', 'Une longue description', '20-03-2022');
const fourthTask = Task('Du boulot blabla', 'Une longue description', '20-03-2022');
app.findProj('Ménage').addTask(firstTask);
app.findProj('DWWM').addTask(secondTask);
app.findProj('Sport').addTask(thirdTask);
app.findProj('DWWM').addTask(fourthTask);

function loadUI() {
  populateProjects(app);
  populateTaskContainer('Ménage');
  listenProjBtn();
  listenNewProjectButton();
}

/// populateProjects uses createprojbtn function to append projects to #project-list elem
function createProjBtn(name) {
  const projList = document.getElementById('project-list');

  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.classList.add('project');
  btn.textContent = name;

  li.appendChild(btn);
  projList.appendChild(li);
}
function populateProjects(library) {
  const projList = document.getElementById('project-list');
  projList.textContent = '';
  library.getProjects().forEach((proj) => createProjBtn(proj.getName()));
  listenProjBtn();
  hideProjInput();
}

/// add task to #task-container
function populateTaskContainer(projectName) {
  clearTaskContainer();
  populateProjectTitle(projectName);
  const projectObj = app.findProj(projectName);
  const taskContainer = document.getElementById('task-container');

  projectObj.getTasks().forEach((task) => { createTask(task, taskContainer); });
}
function createTask(taskObject) {
  const task = document.createElement('div');
  task.classList.add('task');

  const taskName = document.createElement('div');
  taskName.classList.add('task-name');
  taskName.textContent = taskObject.getName();

  const taskDate = document.createElement('div');
  taskDate.classList.add('task-date');
  taskDate.textContent = taskObject.getDate();

  task.appendChild(taskName);
  task.appendChild(taskDate);
  const taskContainer = document.getElementById('task-container');
  taskContainer.appendChild(task);
}

function populateProjectTitle(project) {
  const projectName = document.getElementById('project-name');
  projectName.textContent = project;
}
function clearTaskContainer() {
  const taskContainer = document.getElementById('task-container');
  taskContainer.textContent = '';
}
function listenProjBtn() {
  const projectsButtons = document.querySelectorAll('.project');
  projectsButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      populateTaskContainer(event.target.textContent);
    });
  });
}
/// function to handle the + project button and input in .new-project div
function listenNewProjectButton() {
  const newProj = document.querySelector('.new-project-button');
  newProj.addEventListener('click', showProjInput);
}
function showProjInput() {
  const content = document.querySelector('.new-project');
  content.innerHTML = '<input type="text" class="project"> <div class="pop-up-buttons"> <button class="add-button">Add</button><button class="cancel-button">Cancel</button></div>';
  listenNewProjectCancel();
  listenNewProjAdd();
}
function listenNewProjectCancel() {
  const cancel = document.querySelector('.cancel-button');
  cancel.addEventListener('click', hideProjInput);
}
function hideProjInput() {
  const content = document.querySelector('.new-project');
  content.innerHTML = '<button class="new-project-button">New project</button>';
  listenNewProjectButton();
}
function listenNewProjAdd() {
  const add = document.querySelector('.add-button');
  add.addEventListener('click', addProject);
}
function addProject() {
  const projectName = document.querySelector('input.project').value;
  app.add(projectName);
  populateProjects(app);
}

export {
  createProjBtn, populateProjects, populateProjectTitle,
  clearTaskContainer, createTask, populateTaskContainer, listenProjBtn, loadUI,
};
