import React from "react";

const AppHeader = ({toDo, done}) => {
    return (
        <div className="title">
            <h1>My Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    )
};

export default AppHeader