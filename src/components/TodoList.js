import React from "react";
import TodoListItem from './TodoListItem'
import './ListGroop.css'

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-item">
                <TodoListItem {...itemProps}/>
            </li>
        )
    });
    return (
        <ul className="list">
            {elements}
        </ul>
    )
};
export default TodoList