const Task = (title, description, date = '', status = 'undone') => {
  const getTitle = () => title;
  const setDescription = (descr) => { description = descr; };
  const getDescription = () => description;
  const changeStatus = () => (status == 'undone' ? status = 'done' : status = 'undone');
  const getStatus = () => status;
  const setDate = (value) => date = value;
  const getDate = () => date;

  return {
    getTitle, getDescription, changeStatus, getStatus, setDescription, setDate, getDate
  };
};

export { Task };
