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
  // "dashboard" will show the main stack tracker page first
  const [view, setView] = useState("dashboard");

  return
  (
    <div classname="app">
      /* Header component shows the app title and intro blahblah */
      <Header />
      /* Viewswitcher gets the current view and function.
      Also lets me click buttons like dashboard and about */
      <viewSwitcher view={view} setView={setView} />

      /* if view === "dashboard", then shows dashboardview, if not, show aboutview */
      {view === "dashboard" ? <DashboardView /> : <AboutView />}
    </div>
  );
}
// exporting!
export default App;