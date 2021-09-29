const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleFormSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  console.log(username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);  
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleFormSubmit);

const savedUser = localStorage.getItem(USERNAME_KEY);

if(savedUser === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleFormSubmit);

} else {
  //show the greetings
  paintGreetings(savedUser);

}