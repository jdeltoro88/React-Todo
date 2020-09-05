import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {

    return (
        <div>

            {props.tasks.map((item) => (
            <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
            ))}
             <button className="clearButton" onClick={props.clearCompleted}>Clear completed tasks</button>

        </div>
    );
};




export default TodoList;



