const numberGeneratorInput = document.querySelector(".number-generator input");
const numberPlayerInput = document.querySelector(".number-player input");
const numberGameForm = document.querySelector(".number-game-form");
const playResultPhrase = document.querySelector(".play-result p");
const playResultStatement = document.querySelector(".play-result strong");


function randomNumberPicker(event){
  event.preventDefault();

  const maxNumber = numberGeneratorInput.value;
  const guessedNumber = numberPlayerInput.value;
  const randomNumber = Math.floor(Math.random()*maxNumber+1);
  
  if(parseInt(maxNumber) < parseInt(guessedNumber)){
    alert("enter a valid number")
  } else {
    playResultPhrase.innerText = `You chose: ${guessedNumber}, the machine chose: ${randomNumber}. `;

    if(parseInt(guessedNumber) === parseInt(randomNumber)) {
      playResultStatement.innerText = "You win!"
    } else {
      playResultStatement.innerText = "You lost!"
    }
  }
  

}

numberGameForm.addEventListener("submit", randomNumberPicker);





