const h1 = document.querySelector("h1");
const colors = ['#cfeb34', '#6eeb34', '#34ebb7', '#349feb']
//default style
h1.style.color = "#fff";
// document.body.style.backgroundColor = 'grey';
//background change
function handleWindowColorChange() {
  const width = window.innerWidth;
  if (width >= 900) {
    document.body.style.backgroundColor =  colors[0];
  } else if (width >= 600) {
    document.body.style.backgroundColor =  colors[1];
  } else if (width >= 300) {
    document.body.style.backgroundColor =  colors[2];
  } else {
    document.body.style.backgroundColor =  colors[3];
  }
}

addEventListener('resize', handleWindowColorChange);
window.handleWindowColorChange();