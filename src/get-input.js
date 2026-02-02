import { input } from './index.js';
import { displayTask } from "./add-task.js";
import { saveTasks } from './storage.js';


class Input {
    constructor(title, description, date, priorityType, categoryType) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.date = date;
        this.priorityType = priorityType;
        this.categoryType = categoryType;
    }
}

export function pushInputvalue() {
    const dialog = document.querySelector('dialog');
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const date = document.querySelector('.date').value;
        const priorityType = document.querySelector('.priority-type').value;
        const categoryType = document.querySelector('.category-type').value;

        input.push(new Input(title, description, date, priorityType, categoryType));
        saveTasks(input);
        
        form.reset();
        
        dialog.close();
        displayTask();
    });
} 

