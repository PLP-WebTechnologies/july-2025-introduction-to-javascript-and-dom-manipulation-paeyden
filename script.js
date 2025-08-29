// ================= Part 1: Variables & Conditionals =================

// Check age function
document.getElementById("check-age-btn").addEventListener("click", function() {
  const age = Number(document.getElementById("age-input").value);
  let message = "";

  if (age >= 18) {
    message = "You are an adult!";
  } else if (age > 0) {
    message = "You are a minor!";
  } else {
    message = "Please enter a valid age!";
  }

  document.getElementById("age-result").textContent = message;
});

// ================= Part 2: Functions =================

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to JS Practice.`;
}

// Function 2: Square a number
function squareNumber(num) {
  return num * num;
}

// Event listeners for functions
document.getElementById("greet-btn").addEventListener("click", function() {
  const greeting = greetUser("Mercy");
  document.getElementById("greet-result").textContent = greeting;
});

document.getElementById("square-btn").addEventListener("click", function() {
  const result = squareNumber(7);
  document.getElementById("square-result").textContent = `7 squared is ${result}`;
});

// ================= Part 3: Loops =================

// For loop example: Display numbers 1-5
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Number ${i}`;
  numberList.appendChild(li);
}

// While loop example: Countdown from 5
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// ================= Part 4: DOM Interactions =================

// Toggle a message
document.getElementById("toggle-btn").addEventListener("click", function() {
  const msg = document.getElementById("toggle-msg");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
});

// Change title dynamically
document.getElementById("main-title").textContent = "JS Interactive Demo!";
