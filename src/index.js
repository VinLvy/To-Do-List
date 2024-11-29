import './style.css';

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
}

const ProjectManager = (() => {
    let projects = [];
    let currentProject = null;

    const addProject = (name) => {
        if (!projects.some(project => project.name === name)) {
            projects.push(new Project(name));
            saveToLocalStorage();
        }
    };

    const deleteProject = (name) => {
        projects = projects.filter(project => project.name !== name);
        if (currentProject && currentProject.name === name) {
            currentProject = null; // Clear current project if it was deleted
        }
        saveToLocalStorage();
    };

    const setCurrentProject = (name) => {
        currentProject = projects.find(p => p.name === name) || null;
        return currentProject;
    };

    const addTodoToProject = (projectName, todo) => {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            project.todos.push(todo);
            saveToLocalStorage();
        }
    };

    const getCurrentProject = () => currentProject;

    const getProjects = () => projects;

    const loadProjects = () => {
        const savedProjects = JSON.parse(localStorage.getItem("projects"));
        if (savedProjects) {
            projects = savedProjects.map(projData => {
                const project = new Project(projData.name);
                project.todos = projData.todos.map(todoData => Object.assign(new Todo(), todoData));
                return project;
            });
        } else {
            // Add a default project if no saved data
            addProject("Default Project");
            setCurrentProject("Default Project");
        }
    };

    return {
        addProject,
        deleteProject,
        addTodoToProject,
        setCurrentProject,
        getCurrentProject,
        getProjects,
        loadProjects,
    };
})();

const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(ProjectManager.getProjects()));
};

// DOM manipulation functions
const renderProjects = () => {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; // Clear existing projects

    ProjectManager.getProjects().forEach(project => {
        const projectItem = document.createElement("li");
        projectItem.className = "project";

        // Highlight the selected project
        if (ProjectManager.getCurrentProject() && ProjectManager.getCurrentProject().name === project.name) {
            projectItem.classList.add("active");
        }

        const projectNameSpan = document.createElement("span");
        projectNameSpan.textContent = project.name;

        projectItem.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-project")) return;

            ProjectManager.setCurrentProject(project.name);
            renderProjects(); // Re-render projects to update active state
            renderTodos(); // Render todos for the selected project
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-project";
        deleteButton.addEventListener("click", () => {
            deleteProject(project.name);
        });

        projectItem.appendChild(projectNameSpan);
        projectItem.appendChild(deleteButton);
        projectList.appendChild(projectItem);
    });
};


const deleteProject = (projectName) => {
    if (confirm(`Are you sure you want to delete the project "${projectName}"?`)) {
        ProjectManager.deleteProject(projectName); // Use the new deleteProject method
        renderProjects();
        renderTodos(); // Clear todos if the deleted project was selected
    }
};

const renderTodos = () => {
    const todoList = document.getElementById("todo-list");
    const projectTitle = document.getElementById("current-project-title");

    const currentProject = ProjectManager.getCurrentProject();
    if (currentProject) {
        projectTitle.textContent = currentProject.name;
        todoList.innerHTML = ""; // Clear existing todos

        currentProject.todos.forEach(todo => {
            const todoItem = document.createElement("li");
            todoItem.className = `todo-item priority-${todo.priority}`;
            todoItem.innerHTML = `
                <div>
                    <strong>${todo.title}</strong> - ${todo.dueDate || "No due date"}
                </div>
                <button class="delete-todo">Delete</button>
            `;

            // Add click event to show details
            todoItem.addEventListener("click", (e) => {
                // Avoid triggering the click when the delete button is clicked
                if (e.target.classList.contains("delete-todo")) return;

                showTodoDetails(todo);
            });

            // Delete todo logic
            todoItem.querySelector(".delete-todo").addEventListener("click", () => {
                currentProject.todos = currentProject.todos.filter(t => t !== todo);
                saveToLocalStorage();
                renderTodos();
            });

            todoList.appendChild(todoItem);
        });
    } else {
        projectTitle.textContent = "No Project Selected";
        todoList.innerHTML = "<li>No todos available</li>";
    }
};

// Function to show details in the modal
const showTodoDetails = (todo) => {
    // Populate modal with todo details
    document.getElementById("todo-modal-title").textContent = todo.title;
    document.getElementById("todo-modal-description").textContent = todo.description || "No description provided";
    document.getElementById("todo-modal-dueDate").textContent = todo.dueDate || "No due date";
    document.getElementById("todo-modal-priority").textContent = todo.priority || "No priority";

    // Show the modal
    document.getElementById("todo-details-modal").style.display = "block";
};

// Close modal functionality
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("todo-details-modal").style.display = "none";
});


const setUpEventListeners = () => {
    // Add new project
    document.getElementById("new-project-btn").addEventListener("click", () => {
        const projectName = prompt("Enter new project name:");
        if (projectName) {
            ProjectManager.addProject(projectName);
            ProjectManager.setCurrentProject(projectName);
            renderProjects();
            renderTodos();
        }
    });

    // Add new todo
    document.getElementById("todo-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("todo-title").value;
        const description = document.getElementById("todo-description").value;
        const dueDate = document.getElementById("todo-dueDate").value;
        const priority = document.getElementById("todo-priority").value;
        const currentProject = ProjectManager.getCurrentProject();

        if (title && currentProject) {
            const newTodo = new Todo(title, description, dueDate, priority);
            ProjectManager.addTodoToProject(currentProject.name, newTodo);
            renderTodos();

            // Reset form
            document.getElementById("todo-form").reset();
        } else {
            alert("Please provide a title and select a project.");
        }
    });
};

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    ProjectManager.loadProjects();
    renderProjects();
    renderTodos();
    setUpEventListeners();
});
