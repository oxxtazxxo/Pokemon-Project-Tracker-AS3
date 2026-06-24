import TaskCard from "./TaskCard";

function TaskList({tasks}){
    return(
        <section className="task-list">
            {/* section title for the task list */}
            <h3>Current Project Tasks</h3>
            
            {/* map goes through each tasks and makes one Taskcard for it :3 */}
            <div className="task-grid">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </section>
    );
}

export default TaskList;