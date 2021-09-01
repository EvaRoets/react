import React from "react";

export default function Todo({todo, checkOffTodo}) {
    function todoClick() {
        checkOffTodo(todo.id)
    }

    return (
        <div className="todo">
            <label>
                <input type="checkbox" checked={todo.complete} onChange={todoClick}/>
                {todo.name}
            </label>
        </div>
    )
}