import React, {Component} from "react";
import './ItemForm.css'

export default class ItemForm extends Component {

    constructor(state) {
        super();
        this.state = {
            label: ''
        };
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form
                className="item-add-form"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    onChange={this.onLabelChange}
                    placeholder="What needs to be done"
                    value={this.state.label}
                />
                <button
                    className="btn-input add">
                    Add Item
                </button>
            </form>
        )
    }
}
