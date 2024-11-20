import './style.css'

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.notes = "";
        this.checklist = [];
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
}

const ProjectManager = (() => {
    const projects = [];
    const addProject = (name) => {
        projects.push(new Project(name));
        saveToLocalStorage();
    };
    const addTodoToProject = (projectName, todo) => {
        const project = projects.find(p => p.name === projectName);
        if (project) {
            project.todos.push(todo);
            saveToLocalStorage();
        }
    };
    return { projects, addProject, addTodoToProject };
})();

const saveToLocalStorage = () => {
    localStorage.setItem("projects", JSON.stringify(ProjectManager.projects));
};

const loadFromLocalStorage = () => {
    const savedProjects = JSON.parse(localStorage.getItem("projects"));
    if (savedProjects) {
        ProjectManager.projects = savedProjects.map(projData => {
            const project = new Project(projData.name);
            project.todos = projData.todos.map(todoData => Object.assign(new Todo(), todoData));
            return project;
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
    renderProjects();
    setUpEventListeners();
});

const renderProjects = () => {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = ""; // Clear existing projects
    ProjectManager.projects.forEach(project => {
        const projectItem = document.createElement("li");
        projectItem.textContent = project.name;
        projectItem.className = "project";
        projectItem.addEventListener("click", () => renderTodos(project.name));
        projectList.appendChild(projectItem);
    });
};

const renderTodos = (projectName) => {
    const todoList = document.getElementById("todo-list");
    const project = ProjectManager.projects.find(p => p.name === projectName);
    const projectTitle = document.getElementById("current-project-title");

    if (project) {
        projectTitle.textContent = project.name;
        todoList.innerHTML = ""; // Clear existing todos

        project.todos.forEach(todo => {
            const todoItem = document.createElement("li");
            todoItem.className = `todo-item priority-${todo.priority}`;
            todoItem.innerHTML = `
                <div>
                    <strong>${todo.title}</strong> - ${todo.dueDate}
                </div>
                <button class="delete-todo">Delete</button>
            `;

            // Delete todo logic
            todoItem.querySelector(".delete-todo").addEventListener("click", () => {
                project.todos = project.todos.filter(t => t !== todo);
                saveToLocalStorage();
                renderTodos(projectName);
            });

            todoList.appendChild(todoItem);
        });
    }
};

const setUpEventListeners = () => {
    // Add new project
    document.getElementById("new-project-btn").addEventListener("click", () => {
        const projectName = prompt("Enter new project name:");
        if (projectName) {
            ProjectManager.addProject(projectName);
            renderProjects();
        }
    });

    // Add new todo
    document.getElementById("todo-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("todo-title").value;
        const description = document.getElementById("todo-description").value;
        const dueDate = document.getElementById("todo-dueDate").value;
        const priority = document.getElementById("todo-priority").value;
        const currentProject = document.getElementById("current-project-title").textContent;

        if (title && currentProject) {
            const newTodo = new Todo(title, description, dueDate, priority);
            ProjectManager.addTodoToProject(currentProject, newTodo);
            renderTodos(currentProject);

            // Reset form
            document.getElementById("todo-form").reset();
        } else {
            alert("Please provide a title and select a project.");
        }
    });
};