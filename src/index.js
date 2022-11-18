import './style.css';

import Task from './Task';
import Project from './Project';
import Library from './Library';
import {
  clearTaskContainer, createProjBtn, listenProjBtn, loadUI, populateProjects, populateProjectTitle, populateTaskContainer,
} from './UI';

/// CREATING proj in menu

/// créer 2 taches et les assigner au projet ménage
const pbl = Task('Sortir les poubelles', 'ça sent pas bon...', '10-11-2022', 'undone');
const chambre = Task('Ranger la chambre', 'c sale.', '10-11-2022', 'undone');
loadUI();
