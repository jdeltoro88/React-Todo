import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import "./components/Todo.css";


const tasks = [
      
  {
    task: "exercise",
    id: 1,
    completed: false,
  },

  {
    task: "code review",
    id: 2,
    completed: false,
  },

  {
  task: "meal prep",
  id: 3,
  completed: false,
  },

  {
    task: "clean kitchen",
    id: 4,
    completed: false,
    },

]

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
    
      tasks: tasks

    };
  }

  toggleTask = (taskId) => {
    this.setState ({
      tasks: this.state.tasks.map((item) => {
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((item) => {
        return !item.completed;
      })
    })
  }

  addTask = (taskName) => {
    console.log("al: App.js: addTask: taskName: ", taskName);
    this.setState({
      tasks: [
        ...this.state.tasks,
        {id: Date.now(), task: taskName, completed: false}
      ]
    });
  };
  
  
  render() {
    return (
      <div className="mainDiv">

        <h1>To-Do List</h1>
        <TodoForm
        addTask={this.addTask} 
        />
    
        <TodoList 
        tasks={this.state.tasks}
        toggleTask={this.toggleTask}
        clearCompleted={this.clearCompleted} 
        />
       
      </div>
    );
  }
  }

export default App;