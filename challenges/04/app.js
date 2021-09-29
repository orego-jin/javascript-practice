const christmasTimer = document.querySelector("h2#c-clock");

function christmasCountdown(){
  const date = new Date();
  const christmasDate = new Date("12/25/2021 00:00:00");
  const timeBeforeChristmas = christmasDate - date;
  
  const days = Math.floor(parseInt(timeBeforeChristmas) / (1000*60*60*24));

  const hours =  Math.floor((parseInt(timeBeforeChristmas) - parseInt(days*1000*60*60*24))/ (1000*60*60));
  const hoursFormatted = String(hours).padStart(2, "0");

  const minutes = Math.floor((parseInt(timeBeforeChristmas) - parseInt(days*1000*60*60*24) - parseInt(hours*1000*60*60) ) / (1000*60));
  const minutesFormatted = String(minutes).padStart(2, "0");

  const seconds = Math.floor((parseInt(timeBeforeChristmas) - parseInt(days*1000*60*60*24) - parseInt(hours*1000*60*60) - parseInt(minutes*1000*60) ) / (1000));
  const secondsFormatted = String(seconds).padStart(2, "0");


  christmasTimer.innerText = `${days}d ${hoursFormatted}h ${minutesFormatted}m ${secondsFormatted}s `
}

christmasCountdown();
setInterval(christmasCountdown, 1000);


// const clockTitle = document.querySelector("h2#c-clock");

// function getTime() {
//   const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
//   const now = new Date();
//   // This is in milisecondsx
//   const difference = new Date(xmasDay - now);
//   const secondsInMs = Math.floor(difference / 1000);
//   const minutesInMs = Math.floor(secondsInMs / 60);
//   const hoursInMs = Math.floor(minutesInMs / 60);
//   const days = Math.floor(hoursInMs / 24);
//   const seconds = secondsInMs % 60;
//   const minutes = minutesInMs % 60;
//   const hours = hoursInMs % 24;
//   const daysStr = `${days < 10 ? `0${days}` : days}d`;
//   const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//   const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//   const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//   clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }
// getTime();
// setInterval(getTime, 1000);
