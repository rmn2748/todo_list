const Todo = (title, description) => {
    let status = false;

    const getTitle = () => title;
    const getDescription  = () => description;
    const setStatus = () => status == false ? true : false;
    const getStatus = () => status
    
   
    return {getTitle, getDescription, setStatus, getStatus};
  };
  
  export { Todo}