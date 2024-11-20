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
        projectItem.textContent = project.name;
        projectItem.className = "project";
        projectItem.addEventListener("click", () => {
            ProjectManager.setCurrentProject(project.name);
            renderTodos();
        });
        projectList.appendChild(projectItem);
    });
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
