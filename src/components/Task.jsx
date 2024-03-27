import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
    const [options, setOptions] = useState(false);


    function handleClick() {
        setOptions(!options);

    }

    const handleDelete = () => {
        if (task.status !== 'Completed') {
            onDelete();
        } else {
            alert('Completed tasks cannot be deleted.');
        }
    };

    const handleEdit = () => {
        onEdit(task);
    };


    return (
        <div className='p-2 m-2 bg-gray-300'>
            <div className='flex justify-between'>
                <h3 className='text-lg font-semibold'>{task.title}</h3>
                <p className='bg-blue-500 border-2 px-2 py-1'>{task.priority}</p>
            </div>
            <hr className="my-2 border-gray-400" />

            <p className='text-gray-600 leading-3 '>{task.description}</p>

            <div className='flex items-center justify-between relative'>
                <p>@{task.assignee}</p>

                <button onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-9 h-9 bg-blue-500 border-2 px-2 py-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg></button>
                {options ?
                    <div className='flex flex-col absolute -right-16 border-2 bg-gray-300 px-6 py-2 rounded-xl'>
                        <button onClick={handleEdit}>Edit</button>
                        <hr />
                        <button onClick={handleDelete}>delete</button>
                    </div>
                    : null}

            </div>


            <p className='bg-blue-500 text-white
             w-28 border-2 px-2 py-1'>{task.status}</p>
            {/* <p>Start Date: {task.startDate}</p>
            {task.endDate && <p>End Date: {task.endDate}</p>} */}
        </div>
    );
};

export default Task;
