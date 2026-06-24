function TaskCard({task}){
    return(
        <article className="task-card">
            {/* shows the task title */}
            <h3>{task.title}</h3>

            {/* shows the task category */}
            <p>Category: {task.category}</p>

            {/* shows the task status */}
            <p>Status: {task.status}</p>
        </article>
    );
}

export default TaskCard;