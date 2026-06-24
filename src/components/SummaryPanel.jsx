function SummaryPanel({tasks}){
    // total number of tasks in tracker
    const totalTasks = tasks.length;

    // counts how many tasks have a status of complete
    const completedTasks = tasks.filter(
        (task) => task.status === "Completed"
    ).length;

    const inProgressTasks = tasks.filter(
        (task) => task.status === "In Progress"
    ).length;

    return(
        <div className="summary-panel">
            {/* total tasks card */}
            <div className="summary-card">
                <h3>{totalTasks}</h3>
                <p>Total Tasks</p>
            </div>
            {/* completed tasks card*/}
            <div className="summary-card">
                <h3>{completedTasks}</h3>
                <p>Completed</p>
            </div>
            {/* in progress tasks card */}
            <div className="summary-card">
                <h3>{inProgressTasks}</h3>
                <p>In Progress</p>
            </div>

        </div>
    );
}
export default SummaryPanel;