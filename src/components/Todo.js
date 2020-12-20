import React, {useState} from 'react';
import TodoList from "./TodoList";
import NewTask from "./NewTask";

const Todo = () => {
    const [tasks, setTasks] = useState([
        {
            text: "Clean your room",
            isCompleted: false
        },
        {
            text: "To go to cinema",
            isCompleted: true
        }
    ]);

    const addNewTask = (text) =>{
let newRow = [...tasks, {text}]// ... reiskia kad pasidarys kopija tasks ir prides text dar viena
    setTasks(newRow)
    }
//use efect naudojamas tik kai value pasikeicia, todel sitai uzduociai nereikalinga, nes su button pakeiciam duomensi
    return (
        <div>
            <div className="table">
                {tasks.map((task, index) => (
                    <TodoList
                        key={index}
                        index={index}
                        task={task}/>
                ))}
            </div>
            <NewTask addNewTask={addNewTask}/>
        </div>
    );
};

export default Todo;