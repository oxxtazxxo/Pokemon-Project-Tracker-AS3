function TaskCard({task, deleteTask}){
    return(
        <article className="task-card">
            {/* shows the task title */}
            <h3>{task.title}</h3>

            {/* shows the task category */}
            <p>Category: {task.category}</p>

            {/* shows the task status */}
            <p>Status: {task.status}</p>

            {/* delete button removes this task by its id */}
            <button onClick={() => deleteTask(task.id)}>DELETE ME</button>
        </article>
    );
}

export default TaskCard;