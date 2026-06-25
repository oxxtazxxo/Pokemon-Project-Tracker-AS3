# Pokemon Project Tracker

A React dashboard made for COSC 3351's assignment 3 to track my progress on the Pokemon Info Finder individual projectt!

## Project Description

Pokemon Project Tracker is a small task management dashboard built with React and Vite. It was designed to help track the progress of my pokemon Info Finder by organizing tasks, showing project status, and giving a simple overview.

The dashboard allows the user to:

- switch between Dashboard and About views
- view project summary information
- add new project tasks
- delete tasks that are no longer needed
- keep track of task categories and statuses

## Features

- Dashboard / About page view switching
- Summary cards for:
    - Total Tasks
    - Completed Tasks
    - In Progress Tasks
- Add Task form using controlled inputs
- Delete Task functionality
- Task cards displayed dynamically from React state
- Custom green dashboard styling with card-based layout :3

## Technologies Used
- React
- Vite
- JavaScript
- CSS

## How to run the project!
1. Open the project folder in Visual Studios Code
2. Open a terminal in the project directory
3. Install dependencies if needed
    npm install
4. Start the development server
    npm run dev
5. Open the local Vite link in your browser

## Project Structure
- App.jsx > main app component and task state management
- Header.jsx > dashboard title and intro section
- ViewSwitcher.jsx > buttons for switching between Dashboard and About Views
- DashboardView.jsx > main dashboard layout
- AboutView.jsx > information about the tracker
- SummaryPanel.jsx - summary cards showing task count
- TaskForm.jsx - form for adding new tasks
- TaskList.jsx - renders the list of task cards
- TaskCard.jsx - individual task display with "delete" button (DELETE ME)

# Author
This project was created for COSC 3351 Assignment 3 and focuses on practicing React fundamentals such as:

- components
- props
- state with useState
- conditional rendering
- list rendering with .map()
- controlled forms
- passing functions through props