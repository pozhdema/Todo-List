import React from "react";
import FontAwesome from 'react-fontawesome'

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : 'white'
    };
    return (
        <div className="block">
             <span
                 style={style}>
                 {label}
             </span>
            <div>
                <button type="button" className="btn-input trash">
                    <FontAwesome
                        name="trash"
                        className=" fas fa-trash-alt"
                    />
                </button>
                <button type="button" className="btn-input exclamation">
                    <FontAwesome
                        name="exclamation"
                        className=" fas fa-exclamation"
                    />
                </button>
            </div>
        </div>
    )

};

export default TodoListItem