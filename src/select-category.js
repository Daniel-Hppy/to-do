
const categoryContainer = document.querySelector('.category-container');


export function selectCategory() {
    const title = document.createElement('h1');
    title.textContent = 'All Tasks';

    const categories = categoryContainer.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('click', (e) => {
            title.textContent = e.target.textContent;

            categories.forEach(cat => cat.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
    return title;
}


   