import SummaryPanel from "./SummaryPanel";
import TaskList from "./TaskList";

function DashboardView({ tasks})
{
    return(
        <section className="dashboard-view">
            <h2>Project Dashboard</h2>
            <p>Track your Pokemon Info Finder development and tasks here ^^.</p>

            {/* summary stats section */}
            <SummaryPanel tasks={tasks} />

            {/* task list section */}
            <TaskList tasks={tasks}/>
            {/* Dashboard summary */}
            <h3>Total Tasks: {tasks.length}</h3>

            {/* Temporary task preview. Used for testing purposes! */}
            {/*<ul>
                {tasks.map((task) => (
                <li key={task.id}>
                    <strong>{task.title}</strong> - {task.category} - {task.status}
                </li>
                ))}
            </ul>*/}
        </section>
    );
}

export default DashboardView;