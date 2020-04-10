import React, {Component} from "react";
import FontAwesome from 'react-fontawesome'

export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = 'block';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important'
        }
        return (
            <div className={classNames}>
             <span
                 className="item-text"
                 onClick={onToggleDone}>
                 {label}
             </span>
                <div>
                    <button type="button" className="btn-input trash" onClick={onDeleted}>
                        <FontAwesome
                            name="trash"
                            className=" fas fa-trash-alt"
                        />
                    </button>
                    <button type="button" className="btn-input exclamation" onClick={onToggleImportant}>
                        <FontAwesome
                            name="exclamation"
                            className=" fas fa-exclamation"
                        />
                    </button>
                </div>
            </div>
        )
    }
};
