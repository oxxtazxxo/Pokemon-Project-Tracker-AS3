import SummaryPanel from "./SummaryPanel";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function DashboardView({ tasks, addTask, deleteTask})
{
    return(
        <section className="dashboard-view">
            <h2>Project Dashboard</h2>
            <p>Track your Pokemon Info Finder development and tasks here ^^.</p>

            {/* summary stats section */}
            <SummaryPanel tasks={tasks} />

            {/* task form section */}
            <TaskForm addTask={addTask}/>

            {/* task list section */}
            <TaskList tasks={tasks} deleteTask={deleteTask}/>

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