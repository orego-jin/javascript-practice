// const player = {
//   name: 'sujin',
//   sayHello: function(name) {
//     console.log ('Hi ' + name);
//   }
// }

// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//   console.log("Please enter a number")
// } else if (age <= 18) {
//   console.log("You are too young.")
// } else if (age > 18) {
//   console.log("You can drink.")
// }


const title = document.querySelector('div.title h1');
const title2 = document.querySelector('div.title h2');

function handleTitleClick() {
  // const currentColor = event.target.style.color;
  // let newColor;
  // const activeClass = "active";
  // if(title.classList.contains(activeClass)){
  //   title.classList.remove(activeClass);
  // } else {
  //   title.classList.add(activeClass);
  // }
  title.classList.toggle("active");
  // event.target.style.color = newColor;
  // console.log("I am clicked!");  
  // console.log(currentColor, newColor)
} 

// function handleMouseEnter(event){
//   event.target.innerText = "Mouse is here";
//   console.log('mouse is here');
// }

// function handleMouseLeave(event){
//   event.target.innerText = "Mouse is gone";
//   console.log('mouse is gone');
// }

// function handleWindowCopy() {
//   alert('copier@_@')
// }

title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// // title.addEventListener("mouseleave", handleMouseLeave);
// title.onmouseleave = handleMouseLeave;


// title2.addEventListener("mouseenter", handleMouseEnter);
// title2.addEventListener("click", handleTitleClick);
// title2.addEventListener("mouseleave", handleMouseLeave);

// window.oncopy = handleWindowCopy;

// window.addEventListener('copy', handleWindowCopy);