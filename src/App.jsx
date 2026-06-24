import Header from "./components/Header";
import ViewSwitcher from "./components/ViewSwitcher";
import DashboardView from "./components/DashboardView";
import AboutView from "./components/AboutView";

function App()
{
  const [view, setView] = useState("dashboard");

  return
  (
    <div classname="app">
      <Header />

      <viewSwitcher view={view} setView={setView} />

      {view === "dashboard" ? <DashboardView /> : <AboutView />}
    </div>
  );
}

export default App;