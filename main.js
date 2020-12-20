const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

digitalClock = () => {
  const time = new Date();
  const getHours = time.getHours();
  const getMinutes = time.getMinutes();
  const getSeconds = time.getSeconds();

  hours.innerHTML = getHours;
  minutes.innerHTML = getMinutes;
  seconds.innerHTML = getSeconds;
};

setInterval(digitalClock, 1000);
