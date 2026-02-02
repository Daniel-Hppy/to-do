import { displayTask } from "./add-task.js";
import { input } from "./index.js";
import { saveTasks } from "./storage.js";

export function deleteTask() {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete-btn');

        if (deleteBtn) {
            const taskElement = deleteBtn.closest('.task-item');
            const taskId = taskElement.dataset.id;

            const taskIndex = input.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                input.splice(taskIndex, 1);
                saveTasks(input);
            }
            displayTask();
        }
    });
}