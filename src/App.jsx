// Also the main parent component!
// useState = being able to use/create "state" in a component
import { useState } from "react";
// import the .css file for app styling
import "./App.css";

// import child components :3
import Header from "./components/Header";
import ViewSwitcher from "./components/ViewSwitcher";
import DashboardView from "./components/DashboardView";
import AboutView from "./components/AboutView";

function App()
{
  // view stores which section of the app is visible
  // "dashboard" will show the main task tracker page first
  const [view, setView] = useState("dashboard");

  // tasks = list of project tasks that will appear on the dashboard :D
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish the Pokemon search form",
      category: "HTML/CSS",
      status: "Completed"
    },
    {
      id: 2,
      title: "Fetch Pokemon data from the PokeAPI",
      category: "JavaScript",
      status: "Completed"
    },
    {
      id: 3,
      title: "Improve styling for the result card layout. Make it pretty",
      category: "CSS",
      status: "In Progress"
    },
    {
      id: 4,
      title: "Add better error handling for invalid Pokemon names",
      category: "JavaScript",
      status: "Not Started"
    }
  ]);
  // adds a new task to the array
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return(
    <div className="app">
      {/* Header component shows the app title and intro blahblah */}
      <Header />
      {/* Viewswitcher gets the current view and function.
      Also lets me click buttons like dashboard and about */}
      <ViewSwitcher view={view} setView={setView} />

      {/* if view === "dashboard", then shows dashboardview, if not, show aboutview */}
      {view === "dashboard" ? (
        <DashboardView 
        tasks={tasks} 
        addTask={addTask}
        deleteTask={deleteTask}/>
      ) : (
        <AboutView />
      )}
    </div>
  );
}
// exporting!
export default App;
