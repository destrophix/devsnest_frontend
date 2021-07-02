console.log('started');

let todos = document.getElementById('todo-container');

function gettodos(){
    let todosList = localStorage.getItem("todos");
    todos.innerHTML = todosList;
}

function addTodo(e){
    if(e.code==='Enter'){
        let todo = document.getElementById('todo-input').value;
        let container = document.getElementById('todo-container');
        if(todo){
            let listItem = `<li><span><i class="fa fa-trash"></i></span>${todo}</li>`
            container.innerHTML += listItem;
            document.getElementById('todo-input').value = "";
        }else{
            alert("Enter a valid todo.");
        }
        
        localStorage.setItem('todos',todos.innerHTML);
    }   
}

document.querySelector('ul').addEventListener('click',function(event){
    const listItem = event.target;
    listItem.classList.toggle('completed');
    localStorage.setItem('todos',todos.innerHTML);

})

document.querySelector('ul').addEventListener('click',function(event){
    // console.log(event.target);
    if(event.target.tagName === 'I'){
        event.target.parentElement.parentElement.remove();
    }
    if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
    }
    localStorage.setItem('todos',todos.innerHTML);

})