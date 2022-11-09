import { Project } from './Project';

const Todolist = () => {
  const projects = [];
  projects.push(Project('Ménage'));
  projects.push(Project('DWWM'));
  projects.push(Project('Sport'));

  const add = (proj) => projects.push(proj);
  const findProj = (name) => projects.find((element) => element.getName() == name);

  return { add, projects, findProj };
};

export { Todolist };
