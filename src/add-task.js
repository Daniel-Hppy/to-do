import { input } from './index.js';

export function addTaskContainer(inputValue) {
    return inputValue.map(input => {
        const container = document.createElement('div');
        container.classList.add('task-item');
        container.dataset.id = input.id;
        const title = document.createElement('h1');
        title.textContent = input.title;
        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = "description-container";
        const textDescription = document.createElement('p');
        textDescription.textContent = "Description";
        textDescription.className = "title-description";
        const description = document.createElement('p');
        description.textContent = input.description;
        const date = document.createElement('p');
        date.textContent = input.date;
        const priorityType = document.createElement('p');
        priorityType.textContent = input.priorityType;
        const categoryType = document.createElement('p');
        categoryType.textContent = input.categoryType;
        const btnContainer = document.createElement('div');
        btnContainer.className = "btn-container";
        const editButton = document.createElement('button');
        editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`
        editButton.classList.add('edit-btn');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`
        deleteButton.classList.add('delete-btn');

        btnContainer.append(editButton, deleteButton);
        descriptionContainer.append(textDescription, description);
        container.append(title, descriptionContainer, date, priorityType, categoryType, btnContainer);
        return container;
    });
}

export function displayTask() {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';
    const task = addTaskContainer(input);
    task.forEach(element => {
        taskContainer.appendChild(element);
    });
}