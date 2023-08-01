// Function to add a new to-do
function addTodo() {
    const input = document.getElementById('newTodoInput');
    const todoText = input.value.trim();

    if (todoText === '') {
        return; // Don't add empty to-do
    }

    const todoList = document.getElementById('todoList');
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = todoText;
    newTodoItem.addEventListener('click', handleTodoItemClick);
    todoList.appendChild(newTodoItem);

    // Clear the input box after adding the to-do
    input.value = '';
}

// Function to handle clicking on a to-do item
function handleTodoItemClick(event) {
    const todoItem = event.target;
    todoItem.classList.add('completed');

    // Wait for 1 second before removing the completed to-do
    setTimeout(() => {
        todoItem.remove();
    }, 1000);
}
