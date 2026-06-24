function ViewSwitcher({ view, setView}){
    return (
        <div className="view-switcher">
            {/* button for dashboard view */}
            <button onClick={() => setView("dashboard")}>
                Dashboard
            </button>

            {/* button for the about view*/}
            <button onClick={() => setView("about")}>
                About
            </button>
        </div>
    );
}
// this component is receiving props from App.jsx
export default ViewSwitcher;