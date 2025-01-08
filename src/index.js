import './style.css';

// Classes for Todo and Project
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

// Project Manager Module
const ProjectManager = (() => {
    let projects = [];
    let currentProject = null;

    const saveToLocalStorage = () => {
        localStorage.setItem("projects", JSON.stringify(projects));
    };

    const loadProjects = () => {
        const savedProjects = JSON.parse(localStorage.getItem("projects"));
        if (savedProjects) {
            projects = savedProjects.map(projData => {
                const project = new Project(projData.name);
                project.todos = projData.todos.map(todoData => Object.assign(new Todo(), todoData));
                return project;
            });
        } else {
            addProject("Default Project");
            setCurrentProject("Default Project");
        }
    };

    const addProject = (name) => {
        if (!projects.some(project => project.name === name)) {
            projects.push(new Project(name));
            saveToLocalStorage();
        }
    };

    const deleteProject = (name) => {
        projects = projects.filter(project => project.name !== name);
        if (currentProject && currentProject.name === name) {
            currentProject = null;
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

// save
const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(ProjectManager.getProjects()));
};

// DOM Manipulation Functions
const renderProjects = () => {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";

    ProjectManager.getProjects().forEach(project => {
        const projectItem = document.createElement("li");
        projectItem.className = "project";

        if (ProjectManager.getCurrentProject() && ProjectManager.getCurrentProject().name === project.name) {
            projectItem.classList.add("active");
        }

        const projectNameSpan = document.createElement("span");
        projectNameSpan.textContent = project.name;

        projectItem.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-project")) return;

            ProjectManager.setCurrentProject(project.name);
            renderProjects();
            renderTodos();
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
        ProjectManager.deleteProject(projectName);
        renderProjects();
        renderTodos();
    }
};

const renderTodos = () => {
    const todoList = document.getElementById("todo-list");
    const projectTitle = document.getElementById("current-project-title");
    const currentProject = ProjectManager.getCurrentProject();

    if (currentProject) {
        projectTitle.textContent = currentProject.name;
        todoList.innerHTML = "";

        currentProject.todos.forEach(todo => {
            const todoItem = document.createElement("li");
            todoItem.className = `todo-item priority-${todo.priority}`;
            todoItem.innerHTML = `
                <div>
                    <strong>${todo.title}</strong> - ${todo.dueDate || "No due date"}
                </div>
                <button class="delete-todo">Delete</button>
            `;

            todoItem.addEventListener("click", (e) => {
                if (e.target.classList.contains("delete-todo")) return;

                showTodoDetails(todo);
            });

            // Delete logic
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

const showTodoDetails = (todo) => {
    document.getElementById("todo-modal-title").textContent = todo.title;
    document.getElementById("todo-modal-description").textContent = todo.description || "No description provided";
    document.getElementById("todo-modal-dueDate").textContent = todo.dueDate || "No due date";
    document.getElementById("todo-modal-priority").textContent = todo.priority || "No priority";

    document.getElementById("todo-details-modal").style.display = "block";
};

document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("todo-details-modal").style.display = "none";
});

const setUpEventListeners = () => {
    document.getElementById("new-project-btn").addEventListener("click", () => {
        const projectName = prompt("Enter new project name:");
        if (projectName) {
            ProjectManager.addProject(projectName);
            ProjectManager.setCurrentProject(projectName);
            renderProjects();
            renderTodos();
        }
    });

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
            document.getElementById("todo-form").reset();
        } else {
            alert("Please provide a title and select a project.");
        }
    });
};

// Add Todo Modal Logic
const addTodoBtn = document.getElementById("add-todo-btn");
const addTodoModal = document.getElementById("add-todo-modal");
const closeTodoModal = document.getElementById("close-todo-modal");

addTodoBtn.addEventListener("click", () => {
    addTodoModal.style.display = "flex";
});

closeTodoModal.addEventListener("click", () => {
    addTodoModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === addTodoModal) {
        addTodoModal.style.display = "none";
    }
});


// Initialization
document.addEventListener("DOMContentLoaded", () => {
    ProjectManager.loadProjects();
    renderProjects();
    renderTodos();
    setUpEventListeners();
});
