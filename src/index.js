import React from "react";
import ReactDom from 'react-dom'
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter"
import './style.css'

const App = () => {
    const todoData = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Drink tea', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
    ];
    return (
        <div className="to-do">
            <AppHeader toDo={1} done={3}/>
            <div className="groop-search">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById("root"));