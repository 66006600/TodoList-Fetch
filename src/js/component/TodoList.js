import React from "react";
import TodoFilters from "./TodoFilters";

const TodoList = ({ children }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hiden shadow-2xl">
            { children }
            <TodoFilters />
        </div>
    );
}
export default TodoList;