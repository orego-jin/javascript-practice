const numberGeneratorInput = document.querySelector(".number-generator input");
const gamePlayerInput = document.querySelector(".game-player input");
const numberGameForm = document.querySelector(".number-game-form");
const playResultPhrase = document.querySelector(".play-result p");
const playResultStatement = document.querySelector(".play-result strong");


function randomNumberPicker(event){
  event.preventDefault();

  const maxNumber = numberGeneratorInput.value;
  const userNumber = gamePlayerInput.value;
  const randomNumber = Math.round(Math.random()*maxNumber);
  
  if(parseInt(maxNumber) < parseInt(userNumber)){
    alert("Please enter a number in the range.");

  } else {
    playResultPhrase.innerText = `You chose: ${userNumber}, the machine chose: ${randomNumber}. `;

    if(parseInt(userNumber) === parseInt(randomNumber)) {
      playResultStatement.innerText = "You win!"
    } else {
      playResultStatement.innerText = "You lost!"
    }
  }

}

numberGameForm.addEventListener("submit", randomNumberPicker);





