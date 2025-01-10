# Todo List Project with Project Management

This is a JavaScript-based web application that allows users to manage their projects and todos efficiently. The app supports multiple projects, dynamic todo creation, and local storage for data persistence.

## Features

- **Multiple Projects**: Create, delete, and switch between different projects.
- **Todo Management**: Add, view, delete, and manage todos within each project.
- **Data Persistence**: Projects and todos are saved to `localStorage` for seamless user experience across sessions.
- **Priority-Based Styling**: Todos are visually categorized by priority levels.
- **Detailed View**: View detailed information for each todo in a modal.

## File Structure

- **`template.html`**: Contains the HTML structure for the application.
- **`style.css`**: Provides styling for the application, including a modern look for buttons and priority-based todo styles.
- **`script.js`**: Contains the core logic for managing projects, todos, and user interactions.

## Usage

### Managing Projects

- **Add a Project**: Click on the `+ Add New Project` button and enter a name for your project.
- **Delete a Project**: Click on the "Delete" button next to a project's name.
- **Switch Projects**: Click on a project's name in the project list to make it the current project.

### Managing Todos

- **Add a Todo**:
  1. Select a project from the project list.
  2. Click on the `+ Add New Todo` button.
  3. Fill out the todo details (title, description, due date, priority) and submit.
- **View a Todo**: Click on a todo item to view its details in a modal.
- **Delete a Todo**: Click on the "Delete" button next to a todo item.

## Code Structure

### Classes

- **`Todo`**: Represents a todo item with attributes such as title, description, due date, priority, and completion status.
- **`Project`**: Represents a project containing a list of todos.

### Modules

- **`ProjectManager`**: Handles all operations related to projects and todos, including adding, deleting, and switching projects, as well as saving to and loading from local storage.

### Functions

- **`renderProjects()`**: Dynamically updates the list of projects in the UI.
- **`renderTodos()`**: Displays todos for the current project.
- **`setUpEventListeners()`**: Sets up event listeners for user interactions such as adding projects and todos.

## Future Enhancements

- Add due date reminders.
- Implement drag-and-drop for reordering todos.
- Enable user authentication for cross-device synchronization.

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your requirements.

