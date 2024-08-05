interface Todo {
    id: number;
    body: string;
    isCompleted: boolean;
}


const addButton : HTMLButtonElement | null = document.querySelector("button")
const todoInput : HTMLInputElement | null = document.querySelector("input")

const todoBox : HTMLDivElement | null = document.querySelector(".my-todos")
let index = 1


let todos: Array<Todo> = []

if (addButton)
    addButton.onclick = () => addTodo(todoInput?.value)


function addTodo(todo: string | undefined){
    if(todo){
        let newTodo: Todo = {
            id: index,
            body: todo,
            isCompleted: false


        }
        index += 1
        todos.push(newTodo)
        showTodo(newTodo)


        if (todoInput)
            todoInput.value = ""
        
    }

}


function editTodo(itemList: HTMLLIElement, itemEdit: HTMLInputElement, saveButton: HTMLButtonElement, editButton: HTMLButtonElement){
    console.log(itemList.classList)
    
    itemList.classList.toggle("hide")
    itemEdit.classList.toggle("hide")
    saveButton.classList.toggle("hide")
    editButton.classList.toggle("hide")


}

function updateTodo(todo: Todo, itemList: HTMLLIElement, itemEdit: HTMLInputElement, saveButton: HTMLButtonElement, editButton: HTMLButtonElement){
    itemList.textContent = itemEdit.value


    itemList.classList.toggle("hide")
    itemEdit.classList.toggle("hide")
    saveButton.classList.toggle("hide")
    editButton.classList.toggle("hide")

    // update todo in array
    todo.body = itemEdit.value
    

    
}

function deleteTodo(todoIndex: number, item: HTMLDivElement){
    todos = todos.filter(todo => todo.id != todoIndex )
    if(todoBox)
        todoBox.removeChild(item)

}

function toggleComplete(todo: Todo){
    todo.isCompleted = !todo.isCompleted

}

function showTodo(todo: Todo){

    const index = todo.id
    const item = document.createElement("div")
    const buttons = document.createElement("div")
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
    const saveButton = document.createElement("button")

    
    const itemList = document.createElement("li")
    const itemEdit = document.createElement("input")
    const itemCheckBox = document.createElement("input")
    itemCheckBox.type = "checkbox"

    itemList.textContent = todo.body
    
    itemEdit.value = todo.body 


    itemEdit.classList.add("hide")

    itemCheckBox.onclick = () => toggleComplete(todo)
    

    itemList.classList.add("item-list")
    itemEdit.classList.add("item-edit")
    item.append(itemCheckBox, itemList, itemEdit)
    
    item.classList.add("todo-item")
    

    deleteButton.textContent = "delete"
    editButton.textContent = "edit"
    saveButton.textContent = "save"

    saveButton.classList.add("hide")

    editButton.onclick = () => editTodo(itemList, itemEdit, saveButton, editButton)
    deleteButton.onclick = () => deleteTodo(index, item) 
    saveButton.onclick = () => updateTodo(todo, itemList, itemEdit, saveButton, editButton)

    buttons.append(deleteButton, editButton, saveButton)
    buttons.classList.add("buttons")

    item.appendChild(buttons)

    if(todoBox)
        todoBox.appendChild( item)
    
        
}