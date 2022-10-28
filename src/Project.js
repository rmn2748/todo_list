const Project = (name) => {
    let todoList = [];

    const getName = () => name;

    const addTodo = (todo) => todoList.push(todo);

    const removeTodo = (todoTitle) => todoList.splice(todoList.indexOf(todoTitle), 1);

    const getTodo = (todoIndex) => todoList[todoIndex];

    const getTodoList = () => {
        return todoList;
    }
    
    return { getName, addTodo, removeTodo, getTodo, getTodoList}
}

export { Project }