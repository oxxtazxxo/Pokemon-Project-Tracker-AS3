function DashboardView({ tasks})
{
    return(
        <section className="dashboard-view">
            <h2>Project Dashboard</h2>
            <p>Track your Pokemon Info Finder development and tasks here ^^.</p>

            {/* Dashboard summary */}
            <h3>Total Tasks: {tasks.length}</h3>

            {/* Temporary task preview */}
            <ul>
                {tasks.map((task) => (
                <li key={task.id}>
                    <strong>{task.title}</strong> - {task.category} - {task.status}
                </li>
                ))}
            </ul>
        </section>
    );
}

export default DashboardView;