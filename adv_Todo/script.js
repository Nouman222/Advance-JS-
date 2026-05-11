let todos = JSON.parse(localStorage.getItem("myTodos")) || [];
let currentFilter = 'all'; // Default filter state

function saveToLocalStorage() {
    localStorage.setItem("myTodos", JSON.stringify(todos));
    updateCounts();
}

function updateCounts() {
    document.getElementById("totalCount").textContent = todos.length;
    document.getElementById("doneCount").textContent = todos.filter(t => t.completed).length;
    document.getElementById("remainingCount").textContent = todos.length - todos.filter(t => t.completed).length;
}

function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    // 1. Filter the todos array based on currentFilter
    const filteredTodos = todos.filter(todo => {
        if (currentFilter === 'active') return !todo.completed;
        if (currentFilter === 'completed') return todo.completed;
        return true; // 'all'
    });

    // 2. Render only the filtered items
    filteredTodos.forEach((todo) => {
        // Find actual index in the original array for toggle/delete
        const originalIndex = todos.indexOf(todo); 
        
        const listItem = document.createElement("li");
        if (todo.completed) listItem.classList.add("completed");

        listItem.innerHTML = `
            <span>${todo.text}</span>
            <button class="btn-done" onclick="toggleTodo(${originalIndex})">✓</button>
            <button class="btn-delete" onclick="deleteTodo(${originalIndex})">✕</button>
        `;
        todoList.appendChild(listItem);
    });
    updateCounts();
}

// Handle filter button clicks
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderTodos();
    };
});

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text) {
        todos.push({ text, completed: false });
        input.value = "";
        saveToLocalStorage();
        renderTodos();
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveToLocalStorage();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
}

document.getElementById("addTodoButton").onclick = addTodo;
document.getElementById("todoInput").onkeypress = (e) => { if (e.key === "Enter") addTodo(); };

// Initial call
renderTodos();
