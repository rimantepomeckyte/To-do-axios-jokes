import React from 'react';

const TodoList = ({index, task}) => {
    console.log(task)
    return (
        <div className="tr">
                <td>{index+1}</td>
                <td>{task.text}</td>
                <td>{task.isCompleted ? "Done" : "In progress"}</td>

        </div>
    );
};

export default TodoList;