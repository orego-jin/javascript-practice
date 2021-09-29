const colorButton = document.querySelector("button#color-button");
const body = document.querySelector("body");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];


function bgColorHandler(event){
  const randomNumber1 = Math.floor(Math.random()*colors.length);
  const randomNumber2 = Math.floor(Math.random()*colors.length);

  // body.style.backgroundColor = colors[randomNumber1];
  // body.style.background = "linear-gradient(to right," + colors[randomNumber1] + "," + colors[randomNumber2] + ")";
  body.style.background = `linear-gradient(to right, ${colors[randomNumber1]}, ${colors[randomNumber2]})`;
}

// bgColorHandler();
colorButton.addEventListener("click", bgColorHandler);