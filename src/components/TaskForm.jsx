import {useState } from "react";

function TaskForm({ addTask }){
    // stores the text for the task title input
    const [title, setTitle] = useState("");

    // stores the selected category
    const [category, setCategory] = useState("JavaScript");

    // stores the selected task status
    const [status, setStatus] = useState("Not Started");

    // this runs when the form is submitted :o
    const handleSubmit = (event) => {
        event.preventDefault();

        // THIS IS A TEMP TEST! I want to see the submitted task
        //console.log("Task submitted: ", {title, category, status});

        // stops empty task titles from being added
        if (title.trim() === ""){
            return;
        }

        // creates a new task object from the form values
        const newTask = {
            id: Date.now(),
            title: title,
            category: category,
            status: status
        };

        // this sends the new task to app.jsx
        addTask(newTask);

        // clears the form after submitting
        setTitle("");
        setCategory("JavaScript");
        setStatus("Not Started");
    };

    return(
        <section className="task-form-section">
            <h3>Add a New Task :3</h3>

            <form className="task-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* task title input */}
                    <label htmlFor="task-title">Task Title</label>
                        <input
                            id="task-title"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Enter a task title"
                        />
                </div>
                    
                <div className="form-group">
                    {/* category dropdown */}
                    <label htmlFor="task-category">Category</label>
                    <select
                        id="task-category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    >
                        <option value="HTML/CSS">HTML/CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="API">API</option>
                        <option value="UI Design">UI Design</option>
                        <option value="Testing">Testing</option>
                    </select>
                </div>
                
                <div className="form-group">
                    {/* status dropdown */}
                    <label htmlFor="task-status">Status</label>
                    <select
                        id="task-status"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                </select>
                </div>
                
                <div className="form-button-wrap">
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </section>
    );
}

export default TaskForm;