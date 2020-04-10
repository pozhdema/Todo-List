import React, {Component} from "react";
import './search.css'

export default class SearchPanel extends Component {
    constructor(state) {
        super();
        this.state = {
            term: ''
        };
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input
                type="text"
                placeholder="search"
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        )
    }
};
