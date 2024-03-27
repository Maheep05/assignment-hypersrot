import Task from "./Task";



export function Columns({title,tasks,colour, onEditTask, onDeleteTask }){
    return (
        <div className="h-96 bg-gray-200 rounded-t-xl">
          <h2 className={`${colour} text-white font-semibold text-md flex justify-center p-2 rounded-t-xl`}>{title}</h2>
          {tasks.map(task => <Task key={task.id} task={task}  onEdit={() => onEditTask(task.id)} 
                    onDelete={() => onDeleteTask(task.id)} />)}
        </div>
      );
}