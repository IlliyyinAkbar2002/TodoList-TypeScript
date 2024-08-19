import ToDo from './ToDo';

class TodoList {
    private todos: ToDo[];
    private nextId: number;

    constructor() {
        this.todos = [];
        this.nextId = 1;
    }

    addToDo(title: string) {
        const todo: ToDo = {
            id: this.nextId++,
            title: title,
            completed: false
        };
        this.todos.push(todo);
        console.log(`Added todo: ${title}`);
    }

    getToDos() {
        return this.todos;
    }

    listToDos(): void {
        console.log("Todo List:");
        for (const todo of this.todos) {
            console.log(`${todo.id}: ${todo.title}`);
        }
    }

    markToDoAsCompleted(id: number): void {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = true;
            console.log(`Marked todo as completed: ${todo.title}`);
        } else {
            console.log(`Todo with id ${id} not found`);
        }
    }

    removeToDo(id: number): void {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        console.log(`Removed todo with id ${id}`);
    }
}

export default TodoList;