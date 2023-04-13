import React from "react";
import TodoFilters from "./TodoFilters";

const TodoList = ({ todos }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hiden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} />
                )

            }
            )}
            <TodoFilters />
        </div>
    );
}
export default TodoList;