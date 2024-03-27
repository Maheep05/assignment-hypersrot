import { useState } from "react";
import TaskModal from "./TaskModal";
import { Columns } from "./Columns";

export function Board() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");

    const handleCreateTask = newTask => {
        console.log("New Task:", newTask);
        setTasks([...tasks, newTask]);
    };

    const handleEditTask = updatedTask => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
        setIsModalOpen(false); // Close the edit modal after editing
    };

    const handleDeleteTask = taskId => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const filteredTasks = tasks.filter(task => {
        const nameMatch = nameFilter ? task.name && task.name.toLowerCase().includes(nameFilter.toLowerCase()) : true;
        const priorityMatch = priorityFilter ? task.priority === priorityFilter : true;
        console.log(nameMatch);
        return nameMatch && priorityMatch;
    });
    

    const columns = [
        { title: 'Pending', tasks: filteredTasks.filter(task => task.status === 'pending'), color: 'bg-[#8c8b90]' },
        { title: 'In Progress', tasks: filteredTasks.filter(task => task.status === 'in-progress'), color: 'bg-[#e69a22]' },
        { title: 'Completed', tasks: filteredTasks.filter(task => task.status === 'completed'), color: 'bg-[#42a81f]' },
        { title: 'Deployed', tasks: filteredTasks.filter(task => task.status === 'deployed'), color: 'bg-[#353976]' },
        { title: 'Deferred', tasks: filteredTasks.filter(task => task.status === 'deferred'), color: 'bg-[#f68871]' }
    ];

    return (
        <div className="p-10 flex flex-col gap-6 ">
            <div className="flex items-center justify-around">
                <span className="text-3xl font-bold">Task Board</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-14 h-14 border-2 border-white bg-white p-2 rounded-full">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
            </div>

            <div className="border-4 border-white shadow-xl p-8 rounded-lg flex flex-col gap-6">
                <div className="flex gap-6 flex-col">
                    <div className="flex flex-row items-center gap-40">
                        <div className="flex flex-row gap-3 items-center">
                            <label className="text-lg font-semibold">Filter By:</label>
                            <input className="rounded-lg text-gray-500 outline-none px-2 py-1" type="text" placeholder="Assignee Name" onChange={e => setNameFilter(e.target.value)} />
                        </div>
                        <div className="bg-white px-4 py-1 rounded-xl text-gray-500">
                            <span>Priority</span>
                            <select onChange={e => setPriorityFilter(e.target.value)}>
                                <option value="">All</option>
                                <option value="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 bg-blue-500 text-white font-semibold text-md rounded-xl">Create Task</button>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <label className="text-lg font-semibold">Sort By:</label>
                        <select className="rounded-lg text-gray-500 px-2 py-1">
                            <option value="P0">P0</option>
                            <option value="P1">P1</option>
                            <option value="P2">P2</option>
                        </select>
                    </div>
                </div>

                <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateTask={handleCreateTask} onEditTask={handleEditTask} />

                <div className="grid grid-cols-5 gap-4">
                    {columns.map(column => (
                        <Columns key={column.title} title={column.title} tasks={column.tasks} colour={column.color} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
                    ))}
                </div>
            </div>
        </div>
    );
}
