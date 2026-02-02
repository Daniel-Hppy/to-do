 import { input } from './index.js';
import { addTaskContainer } from './add-task.js';

export function setupCategoryButtons() {
    const categoryContainer = document.querySelector('.category-container');
    const categories = categoryContainer.querySelectorAll('.category');
    const taskContainer = document.querySelector('.task-container');


    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            const button = e.currentTarget;
            const selectedCategory = button.textContent.trim();

            categories.forEach(cat => cat.classList.remove('active'));
            e.target.classList.add('active');
            taskContainer.innerHTML = '';
            
            let filteredTasks;
            if (selectedCategory === 'All Tasks') {
                filteredTasks = input;
            } else {
                filteredTasks = input.filter(task => task.categoryType === selectedCategory);
            }
            
            const tasks = addTaskContainer(filteredTasks);
            tasks.forEach(element => {
                taskContainer.appendChild(element);
            });
        });
    });
}