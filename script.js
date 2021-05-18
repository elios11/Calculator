// Functions
let numbers = [];

function add(numbers) {
    let result = 0;
    numbers.forEach(element => {
        result += parseInt(element);
    });
    return result;
}
/*
function substract(numbers) {
    let result = parseInt(numbers[0]);
    numbers.forEach(element => {
        result -= parseInt(numbers[element + 1]);
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
*/
// Buttons
let numbersArray = [];
let operationSign = [];
const screen = document.querySelector(".screenText ");


const button0 = document.querySelector(".button0");
button0.addEventListener("click", () => {
    numbersArray.push("0");
    screen.textContent = numbersArray.join("");
});

const button1 = document.querySelector(".button1");
button1.addEventListener("click", () => {
    numbersArray.push("1");
    screen.textContent = numbersArray.join("");
});

const button2 = document.querySelector(".button2");
button2.addEventListener("click", () => {
    numbersArray.push("2");
    screen.textContent = numbersArray.join("");
});

const button3 = document.querySelector(".button3");
button3.addEventListener("click", () => {
    numbersArray.push("3");
    screen.textContent = numbersArray.join("");
});

const button4 = document.querySelector(".button4");
button4.addEventListener("click", () => {
    numbersArray.push("4");
    screen.textContent = numbersArray.join("");
});

const button5 = document.querySelector(".button5");
button5.addEventListener("click", () => {
    numbersArray.push("5");
    screen.textContent = numbersArray.join("");
});

const button6 = document.querySelector(".button6");
button6.addEventListener("click", () => {
    numbersArray.push("6");
    screen.textContent = numbersArray.join("");
});

const button7 = document.querySelector(".button7");
button7.addEventListener("click", () => {
    numbersArray.push("7");
    screen.textContent = numbersArray.join("");
});

const button8 = document.querySelector(".button8");
button8.addEventListener("click", () => {
    numbersArray.push("8");
    screen.textContent = numbersArray.join("");
});

const button9 = document.querySelector(".button9");
button9.addEventListener("click", () => {
    numbersArray.push("9");
    screen.textContent = numbersArray.join("");
});

const buttonPlus = document.querySelector(".buttonPlus");
buttonPlus.addEventListener("click", () => {
    operationSign = "+";
    screen.textContent = "+";
    numbers.push(numbersArray.join(""));
    numbersArray = [];
});

const buttonLess = document.querySelector(".buttonLess");
buttonLess.addEventListener("click", () => {
    operationSign = "-";
    screen.textContent = "-";
    numbers.push(numbersArray.join(""));
    numbersArray = [];
});

const buttonSlash = document.querySelector(".buttonSlash");
buttonSlash.addEventListener("click", () => {
    operationSign = "/";
    screen.textContent = "/";
});

const buttonAsterisk = document.querySelector(".buttonAsterisk");
buttonAsterisk.addEventListener("click", () => {
    operationSign = "*";
    screen.textContent = "*";
});


const buttonPercentage = document.querySelector(".buttonPercentage");
buttonPercentage.addEventListener("click", () => {
    operationSign = "%";
    screen.textContent = "%";
});

const buttonDot = document.querySelector(".buttonDot");
buttonDot.addEventListener("click", () => {
    
});

const buttonEquals = document.querySelector(".buttonEquals");
buttonEquals.addEventListener("click", () => {
    numbers.push(numbersArray.join(""));
    if (operationSign == "+") {
        screen.textContent = add(numbers);
    }
    else if (operationSign == "-") {
        screen.textContent = substract(numbers);
    }
    else if (operationSign == "*") {
        screen.textContent = multiply(numbers);
    }
    else if (operationSign == "/") {
        screen.textContent = divide(numbers);
    }
});

const buttonAC = document.querySelector(".buttonAC");
buttonAC.addEventListener("click", () => {
    numbersArray = [];
    operationSign = [];
    numbers = [];
    screen.textContent = "";
});

const buttonDelete = document.querySelector(".delete");
buttonDelete.addEventListener("click", () => {
    numbersArray.pop();
    screen.textContent = numbersArray.join("");    
});