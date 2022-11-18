import Project from './Project';

const Library = () => {
  const projects = [];
  projects.push(Project('Ménage'));
  projects.push(Project('DWWM'));
  projects.push(Project('Sport'));

  const add = (proj) => projects.push(Project(proj));
  const findProj = (name) => projects.find((element) => element.getName() === name);
  const getProjects = () => projects;

  return {
    add, Library, findProj, getProjects,
  };
};

export default Library;
