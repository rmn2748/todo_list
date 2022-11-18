const Task = (name, description, date = '', status = 'undone') => {
  const getName = () => name;

  const setDescription = (descr) => { description = descr; };

  const getDescription = () => description;

  const changeStatus = () => (status == 'undone' ? status = 'done' : status = 'undone');

  const getStatus = () => status;

  const setDate = (value) => date = value;

  const getDate = () => date;

  return {
    getName, getDescription, changeStatus, getStatus, setDescription, setDate, getDate,
  };
};

export default Task;
