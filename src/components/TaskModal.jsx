import React, { useState } from 'react';

const TaskModal = ({ isOpen, onClose, onCreateTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [priority, setPriority] = useState('P0');
    const [status, setStatus] = useState('pending');

    const handleCreateTask = () => {
        // Validate form fields if needed
        const newTask = {
            title,
            description,
            startDate: new Date().toISOString(), // Start date is the current date
            status,
            assignee,
            priority
        };
        onCreateTask(newTask);
        // Reset form fields
        setTitle('');
        setDescription('');
        setAssignee('');
        setPriority('P0');
        setStatus('');
        onClose();
    };

    function handleReset() {
        setTitle('');
        setDescription('');
        setAssignee('');
        setPriority('P0');
        setStatus('');
    }

    return (
        <>
            {isOpen &&
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
                    <div className="bg-white p-8 rounded-lg z-10 w-[460px]">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-bold ">Edit Task</h2>




                            <button type="button" onClick={onClose} className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg></button>
                        </div>

                        <form onSubmit={e => { e.preventDefault(); handleCreateTask(); }}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 text-lg font-semibold">Title:</label>
                                <input placeholder='Task-1' type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="px-2 py-1 bg-gray-300 rounded-lg w-full" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 text-lg font-semibold">Description:</label>
                                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className="px-2 py-1 bg-gray-300 rounded-lg w-full" rows="3"></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="assignee" className="block text-gray-700 text-lg font-semibold">Assignee:</label>
                                <input type="text" id="assignee" placeholder='@Avengers' value={assignee} onChange={e => setAssignee(e.target.value)} className="px-2 py-1 bg-gray-300 rounded-lg w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="priority" className="block text-gray-700 text-lg font-semibold">Priority:</label>
                                <select id="priority" value={priority} onChange={e => setPriority(e.target.value)} className="px-2 py-1 bg-gray-300 rounded-lg w-full">
                                    <option value="P0">P0</option>
                                    <option value="P1">P1</option>
                                    <option value="P2">P2</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="status" className="block text-gray-700 text-lg font-semibold">Status:</label>
                                <select id="status" value={status} onChange={e => setStatus(e.target.value)} className="px-2 py-1 bg-gray-300 rounded-lg w-full">
                                    <option value="pending">Pending</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                    <option value="deployed">Deployed</option>
                                    <option value="deferred">Deferred</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-6">

                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Submit</button>

                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={handleReset}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default TaskModal;
