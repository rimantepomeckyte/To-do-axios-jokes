import React, {useState} from 'react';

const NewTask = ({addNewTask}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') {
            alert('Iveskita uzduoti')
        } else {
            addNewTask(value);
            setValue('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={value}
                       placeholder="Add new task.."
                       onChange={(e) => setValue(e.target.value)}/>
            </form>
        </div>
    );
};

export default NewTask;