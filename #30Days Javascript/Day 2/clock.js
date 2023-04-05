function setClock() {
    var hourHand = document.querySelector(".hour-hand");
    var minuteHand = document.querySelector(".minute-hand");
    var secondHand = document.querySelector(".second-hand");
  
    var now = new Date();
    var seconds = now.getSeconds();
    var minutes = now.getMinutes();
    var hours = now.getHours() % 12;
  
    var secondDegrees = (seconds / 60) * 360;
    var minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    var hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(setClock, 1000);