const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");
const focusLabel = document.getElementById("FocusLabel");
// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";
  // 12 hour format
  hour = hour % 12 || 12;
  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;

  // Reload every 1 sec
  setTimeout(showTime, 1000);
}
// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
// Change Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpeg')";
    greeting.textContent = "Good Morning, ";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpeg')";
    greeting.textContent = "Good Afternoon, ";
    focusLabel.style.opacity = "1";
    focus.style.opacity = "1";
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../img/evening.jpeg')";
    greeting.textContent = "Good Evening, ";
    document.body.style.color = "white";
  }
}
// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}
// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
getName();
getFocus();
setBgGreet();
showTime();
