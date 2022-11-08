import './style.css';

import  {Task} from './Task'
import {Project} from './Project'
import {Todolist} from './Todolist'
import {createProjBtn} from './UI'




let app = Todolist();

let swimming = Project('Swimming');


createProjBtn(app.projects[0].getName())