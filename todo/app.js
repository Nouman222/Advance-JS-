const add = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

const saveTasks = () => {
  const tasks = [];
  list.querySelectorAll("li").forEach((li) => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => {
  const li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
});

add.addEventListener("click", () => {
  const task = input.value;
    if (task) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    li.textContent = task;
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
      li.addEventListener("click", () => {
  li.style.textDecoration = "line-through";
});
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }})


