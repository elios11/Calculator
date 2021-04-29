// Buttons
const screen = document.querySelector(".screen");

const button0 = document.querySelector(".button0");
button0.addEventListener("click", () => {
    screen.textContent = "0";
});

const button1 = document.querySelector(".button1");
button1.addEventListener("click", () => {
    screen.textContent = "1";
});

const button2 = document.querySelector(".button2");
button2.addEventListener("click", () => {
    screen.textContent = "2";
});

const button3 = document.querySelector(".button3");
button3.addEventListener("click", () => {
    screen.textContent = "3";
});

const button4 = document.querySelector(".button4");
button4.addEventListener("click", () => {
    screen.textContent = "4";
});

const button5 = document.querySelector(".button5");
button5.addEventListener("click", () => {
    screen.textContent = "5";
});

const button6 = document.querySelector(".button6");
button6.addEventListener("click", () => {
    screen.textContent = "6";
});

const button7 = document.querySelector(".button7");
button7.addEventListener("click", () => {
    screen.textContent = "7";
});

const button8 = document.querySelector(".button8");
button8.addEventListener("click", () => {
    screen.textContent = "8";
});

const button9 = document.querySelector(".button9");
button9.addEventListener("click", () => {
    screen.textContent = "9";
});

const buttonPlus = document.querySelector(".buttonPlus");
buttonPlus.addEventListener("click", () => {
    screen.textContent = "+";
});

const buttonLess = document.querySelector(".buttonLess");
buttonLess.addEventListener("click", () => {
    screen.textContent = "-";
});

const buttonSlash = document.querySelector(".buttonSlash");
buttonSlash.addEventListener("click", () => {
    screen.textContent = "/";
});

const buttonAsterisk = document.querySelector(".buttonAsterisk");
buttonAsterisk.addEventListener("click", () => {
    screen.textContent = "*";
});

const buttonDot = document.querySelector(".buttonDot");
buttonDot.addEventListener("click", () => {
    screen.textContent = ".";
});

const buttonPercentage = document.querySelector(".buttonPercentage");
buttonPercentage.addEventListener("click", () => {
    screen.textContent = "%";
});

const buttonEquals = document.querySelector(".buttonEquals");
buttonEquals.addEventListener("click", () => {
    
});

// Functions
function add(numbers) {
    let result = 0;
    numbers.forEach(element => {
        result += element;
    });
    return result;
}

function substract(numbers) {
    let result = 0;
    numbers.forEach(element => {
        result -= element;
    });
    return result;
}

function multiply(numbers) {
    let result = 1;
    numbers.forEach(element => {
        result *= element;
    });
    return result;
}

function divide(numbers) {
    let result = 1;
    return result = numbers[0]/numbers[1];
}
