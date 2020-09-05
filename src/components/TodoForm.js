import React from 'react';

class TodoForm extends React.Component {

    state = {
        toDoItem: ""
    };

    handleInputChange = (e) => {
        this.setState({
            toDoItem: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.toDoItem);
      
    };

    render() {
        return (
            <div className="formDiv">
            <form onSubmit={this.handleSubmit}>
                <input 
                placeholder="New Task" 
                onChange={this.handleInputChange}
                value={this.state.toDoItem}
                type="text"
                name="toDoItem" 
                className="inputStyle"
                />
                <button>Add Task</button>
            </form>
            </div>

        );
    }

}


export default TodoForm;