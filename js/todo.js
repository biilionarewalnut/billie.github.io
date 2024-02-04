const todoForm=document.querySelector('#todo_form');

const todoList=document.querySelector('#todo_list');
const todoInput=todoForm.querySelector("input");
const TODOS_KEY="todos"
let todos=[];
let parsedTodos;
function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    const newTodoObject={
        text:newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObject);
    paintTodo(newTodoObject);
    saveTodos();
}

function deleteTodo(event){
    li=event.target.parentElement;
    
    li.remove();
    todos=todos.filter((todo)=>(todo.id).toString()!==li.id);
    
    console.log(todos);
    saveTodos();
    //update();
    
    
}



function paintTodo(newTodo){
    
     
    const li=document.createElement('li');
    const span=document.createElement('span');
    const btn=document.createElement('button');
    li.id=newTodo.id;
    btn.innerText="X";
    btn.addEventListener("click",deleteTodo);
    span.innerText=newTodo.text;
    li.appendChild(span);
    li.appendChild(btn);
    
    todoList.appendChild(li);

    
}

function update(){
    if (savedTodos!==null){
        parsedTodos=JSON.parse(localStorage.getItem(TODOS_KEY));
        parsedTodos.forEach(paintTodo);
        todos=parsedTodos;
    } 
}

todoForm.addEventListener("submit",handleTodoSubmit);


const savedTodos=(localStorage.getItem(TODOS_KEY));
update();
