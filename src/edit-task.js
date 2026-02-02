import { input } from "./index.js";
import { displayTask } from "./add-task.js";
import { saveTasks } from "./storage.js";

export function editTask() {
    const taskContainer = document.querySelector('.task-container');
    const editDialog = document.querySelector('.edit-container dialog');

    taskContainer.addEventListener('click', (e) => {
        const editBtn = e.target.closest('.edit-btn');
        
        if (editBtn) {
            const taskElement = editBtn.closest('.task-item');
            const taskId = taskElement.dataset.id;
            const task = input.find(t => t.id === taskId);
            
            if (task) {
                document.querySelector('.edit-title').value = task.title;
                document.querySelector('.edit-description').value = task.description;
                document.querySelector('.edit-date').value = task.date;
                document.querySelector('.edit-priority-type').value = task.priorityType;
                document.querySelector('.edit-category-type').value = task.categoryType;
                

                editDialog.dataset.editingId = taskId;
                editDialog.showModal();
            }
        }
    });
    

    const editForm = editDialog.querySelector('form');
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const taskId = editDialog.dataset.editingId;
        const task = input.find(t => t.id === taskId);
        
        if (task) {
            task.title = document.querySelector('.edit-title').value;
            task.description = document.querySelector('.edit-description').value;
            task.date = document.querySelector('.edit-date').value;
            task.priorityType = document.querySelector('.edit-priority-type').value;
            task.categoryType = document.querySelector('.edit-category-type').value;
            
            saveTasks(input);
            editForm.reset();
            editDialog.close();
            displayTask();
        }
    });

    const editCancel = editDialog.querySelector('.cancel');
    editCancel.addEventListener('click', () => {
        editDialog.close();
    });
}