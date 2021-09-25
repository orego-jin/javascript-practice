const pageTitle = document.querySelector(".page-title h1");
const colors = ['green', 'blue', 'red', 'purple'];

const superEventHandler = {
  handleMouseEnter: function () {
    pageTitle.innerText = "The mouse is here!"
    pageTitle.style.color = colors[0];
  },

  handleMouseLeave: function () {
    pageTitle.innerText = "The mouse is gone!"
    pageTitle.style.color = colors[1];
  },

  handleMouseRightClick: function () {
    pageTitle.innerText = "That was a right click!"
    pageTitle.style.color = colors[2];
  },

  handleResize: function () {
    pageTitle.innerText = "You just resized!"
    pageTitle.style.color = colors[3];
  }
}
pageTitle.addEventListener('mouseenter', superEventHandler.handleMouseEnter);
pageTitle.addEventListener('mouseleave', superEventHandler.handleMouseLeave);
window.addEventListener('contextmenu', superEventHandler.handleMouseRightClick);
window.addEventListener('resize', superEventHandler.handleResize);


