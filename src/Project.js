const Project = (name) => {
  const tasks = [];

  const getName = () => name;

  const addTask = (task) => tasks.push(task);

  const removeTask = (taskName) => tasks.splice(tasks.indexOf(taskName), 1);

  const getTasks = () => tasks;

  return {
    getTasks, removeTask, addTask, getName,
  };
};

export default Project;
