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
