import "./styles.css";
import { pushInputvalue } from "./get-input.js";
import { displayTask } from "./add-task.js";
import { selectCategory } from "./select-category.js";
import { deleteTask } from "./delete-task.js";
import { loadTasks } from "./storage.js";
import { setupCategoryButtons } from "./filter-category.js";
import { editTask } from "./edit-task.js";

export const input = loadTasks();

const showModal = document.querySelector('.show-modal');
const dialog = document.querySelector('dialog');
showModal.addEventListener('click', () => {
    dialog.showModal();
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
    dialog.close();
});

function displayCategory() {
    const taskType = document.querySelector('.task-type');
    taskType.innerHTML= '';
    const taskCategory = selectCategory();
    taskType.appendChild(taskCategory);
}

displayCategory();
setupCategoryButtons();
pushInputvalue();
displayTask();
deleteTask();
editTask();

console.log('Loaded tasks:', input);
window.debugInput = input;