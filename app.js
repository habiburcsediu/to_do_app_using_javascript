let newTask = document.querySelector('#task');
let form = document.querySelector('form');
let incompleteUl = document.querySelector('#incomplete-ul');
let completeUl = document.querySelector('#complete-ul');

let createTask = function(task){
    if(task == ''){
        alert('Please write any task');
    }
    else{
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let label = document.createElement('label');
        label.innerHTML = ' ' + task;
        listItem.append(checkbox, label);

        return listItem;
    }
}

let bindIncompleteItem = function(listItem, clickCheckbox){
    let checkbox = listItem.querySelector("input[type='checkbox']");
    checkbox.onchange = clickCheckbox;
}

let bindCompleteItem = function(listItem, removeItem){
    let deleteBtn = listItem.querySelector('.delete');
    deleteBtn.onclick = removeItem;
}

let deleteItem = function(){
    let listItem = this.parentNode;
    listItem.remove();
}

let addComplete = function(){
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete';

    let listItem = this.parentNode;
    listItem.appendChild(deleteBtn);
    listItem.className = 'list-item';
    completeUl.appendChild(listItem);
    this.remove();

    bindCompleteItem(listItem, deleteItem);
}

let addTask = function(e){
    e.preventDefault();
    let listItem = createTask(newTask.value);
    incompleteUl.appendChild(listItem);
    newTask.value = '';

    bindIncompleteItem(listItem, addComplete);
}

for(let i = 0; i < incompleteUl.children.length; i++){
    bindIncompleteItem(incompleteUl.children[i], addComplete);
}

form.addEventListener('submit', addTask);

