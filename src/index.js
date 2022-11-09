import './style.css';

import { Task } from './Task';
import { Project } from './Project';
import { Todolist } from './Todolist';
import { clearTaskContainer, createProjBtn, listenProjBtn, populateProjects, populateProjectTitle, populateTaskContainer } from './UI';

const app = Todolist();


/// CREATING proj in menu
populateProjects(app);
/// créer 2 taches et les assigner au projet ménage
const pbl = Task('Sortir les poubelles', 'ça sent pas bon...', '10-11-2022', 'undone');
const chambre = Task('Ranger la chambre', 'c sale.', '10-11-2022', 'undone');
app.findProj('Ménage').addTodo(pbl);
app.findProj('Ménage').addTodo(chambre)



populateTaskContainer(app.findProj('Ménage'));


listenProjBtn()