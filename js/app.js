loginForm=document.querySelector("#login_form");
loginInput=document.querySelector("#login_form input");
greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME="username";
function onLoginFormHandler(event){
    event.preventDefault();
    const userName=loginInput.value;
    localStorage.setItem(USERNAME,userName);
    loginComplete(userName)
    //greeting.innerText="Hello "+userName;
    
}

function loginComplete(userName){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    greeting.innerText=`Hello ${userName}`;
}
const savedUserName=localStorage.getItem(USERNAME);
if(savedUserName==null){
    loginForm.addEventListener("submit",onLoginFormHandler);
}
else{
    loginComplete(savedUserName)
}
