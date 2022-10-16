function addNew() {
    var item = document.getElementById('new-todo').value
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    newItem.appendChild(text)


    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    //checkbox.style.float = "right";
    newItem.appendChild(checkbox);

    x = document.getElementById('list');
    x.appendChild(newItem);


}

//how to remove an element in a to-do list?
// <
// i className = "material-icons"
// onClick = {
//     () => handleDelete(i)
// } > delete < /i>


// const handleDelete = i => {
//     const taskList = [...Tasks]
//     taskList.splice(i, 1)
//     setTasks(taskList)
// }