import {Project} from './Project'
import {Todolist} from './Todolist'


function createProjBtn(name) {
let projList = document.getElementById('project-list');

let li = document.createElement('li')
let btn = document.createElement('button')
btn.classList.add('project')
btn.textContent = name;

li.appendChild(btn);
console.log(projList)

projList.appendChild(li);
}

export { createProjBtn}