document.getElementById("add-todo-form").addEventListener("submit", todoFormSubmitHandler);

function todoFormSubmitHandler(e) {
    e.preventDefault();


    var todoList = document.getElementById("todo-list");
    var itemEl = document.getElementById("item");
    var item = itemEl.value;
    var li = document.createElement("li");
    li.innerHTML = item;
    li.className = "todo-item";
    li.addEventListener("click", e => todoList.removeChild(e.target));

    todoList.appendChild(li);

    itemEl.value = "";
    itemEl.focus();
}
