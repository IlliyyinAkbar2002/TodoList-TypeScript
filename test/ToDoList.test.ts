import TodoList from '../src/TodoList';
// import ToDo from '../src/ToDo';

describe('TodoList', () => {
    it('should add a todo', () => {
        const todoList = new TodoList();
        todoList.addToDo('Test');
        expect(todoList.getToDos().length).toBe(1);
    });

    it('should mark a todo as completed', () => {
        const todoList = new TodoList();
        todoList.addToDo('Test');
        todoList.markToDoAsCompleted(1);
        expect(todoList.getToDos()[0].completed).toBe(true);
    });

    it('should remove a todo', () => {
        const todoList = new TodoList();
        todoList.addToDo('Test');
        todoList.removeToDo(1);
        expect(todoList.getToDos().length).toBe(0);
    });
});