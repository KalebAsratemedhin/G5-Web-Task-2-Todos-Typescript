var addButton = document.querySelector("button");
var todoInput = document.querySelector("input");
var todoBox = document.querySelector(".my-todos");
var index = 1;
var todos = [];
if (addButton)
    addButton.onclick = function () { return addTodo(todoInput === null || todoInput === void 0 ? void 0 : todoInput.value); };
function addTodo(todo) {
    if (todo) {
        var newTodo = {
            id: index,
            body: todo,
            isCompleted: false
        };
        index += 1;
        todos.push(newTodo);
        showTodo(newTodo);
        if (todoInput)
            todoInput.value = "";
    }
}
function editTodo(itemList, itemEdit, saveButton, editButton) {
    console.log(itemList.classList);
    itemList.classList.toggle("hide");
    itemEdit.classList.toggle("hide");
    saveButton.classList.toggle("hide");
    editButton.classList.toggle("hide");
}
function updateTodo(todo, itemList, itemEdit, saveButton, editButton) {
    itemList.textContent = itemEdit.value;
    itemList.classList.toggle("hide");
    itemEdit.classList.toggle("hide");
    saveButton.classList.toggle("hide");
    editButton.classList.toggle("hide");
    // update todo in array
    todo.body = itemEdit.value;
}
function deleteTodo(todoIndex, item) {
    todos = todos.filter(function (todo) { return todo.id != todoIndex; });
    if (todoBox)
        todoBox.removeChild(item);
}
function toggleComplete(todo) {
    todo.isCompleted = !todo.isCompleted;
}
function showTodo(todo) {
    var index = todo.id;
    var item = document.createElement("div");
    var buttons = document.createElement("div");
    var deleteButton = document.createElement("button");
    var editButton = document.createElement("button");
    var saveButton = document.createElement("button");
    var itemList = document.createElement("li");
    var itemEdit = document.createElement("input");
    var itemCheckBox = document.createElement("input");
    itemCheckBox.type = "checkbox";
    itemList.textContent = todo.body;
    itemEdit.value = todo.body;
    itemEdit.classList.add("hide");
    itemCheckBox.onclick = function () { return toggleComplete(todo); };
    itemList.classList.add("item-list");
    itemEdit.classList.add("item-edit");
    // const div = document.createElement("div")
    item.append(itemCheckBox, itemList, itemEdit);
    // div.classList.add("fields")
    // item.appendChild(div)
    item.classList.add("todo-item");
    deleteButton.textContent = "delete";
    editButton.textContent = "edit";
    saveButton.textContent = "save";
    saveButton.classList.add("hide");
    editButton.onclick = function () { return editTodo(itemList, itemEdit, saveButton, editButton); };
    deleteButton.onclick = function () { return deleteTodo(index, item); };
    saveButton.onclick = function () { return updateTodo(todo, itemList, itemEdit, saveButton, editButton); };
    buttons.appendChild(deleteButton);
    buttons.appendChild(editButton);
    buttons.appendChild(saveButton);
    buttons.classList.add("buttons");
    item.appendChild(buttons);
    if (todoBox)
        todoBox.appendChild(item);
}
