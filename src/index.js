import React, {Component} from "react";
import ReactDom from 'react-dom'

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter"
import ItemForm from "./components/ItemForm";

import './style.css'

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [],
        term: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        })
    };

    addedItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onSearchChange = (term) => {
        this.setState({term})
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((items) => !items.done);
            case 'done':
                return items.filter((items) => items.done);
            default:
                return items;
        }
    }

    render() {
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
                <div className="to-do">
                    <AppHeader toDo={doneCount} done={todoCount}/>
                    <div className="groop-search">
                        <SearchPanel
                            onSearchChange={this.onSearchChange}
                        />
                        <ItemStatusFilter
                            filter={filter}
                            onFilterChange={this.onFilterChange}
                        />
                    </div>
                    <TodoList
                        todos={visibleItems}
                        onDeleted={this.deleteItem}
                        onToggleImportant={this.onToggleImportant}
                        onToggleDone={this.onToggleDone}
                    />
                    <ItemForm onAdded={this.addedItem}/>
                </div>
        );
    }
};

ReactDom.render(<App/>, document.getElementById("root"));