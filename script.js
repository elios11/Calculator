const screenText = document.getElementById("screenText");
const numberButtons = document.getElementsByClassName("numberButton");
const allClearButton = document.getElementById("allClearButton");
const deleteButton = document.getElementById("deleteButton");
const dotButton = document.getElementById("dotButton");
const equalsButton = document.getElementById("equalsButton");
const operationButtons = document.getElementsByClassName("operationButton");
const operationText = document.getElementById("operationText");
let firstNumberFinished = false;
let currentNumber = 0;
let operationSign = undefined;

let firstNumberArray = [];
let secondNumberArray = [];

let parsedFirstNumber = undefined;
let parsedSecondNumber = undefined;

//Guarda en un array el número elegido
Array.from(numberButtons).forEach(element => {
    element.addEventListener("click", () => {
        if (firstNumberArray.length < 9 && !firstNumberFinished) {
            currentNumber = parseFloat(element.innerHTML);
            firstNumberArray.push(currentNumber);
            parsedFirstNumber = parseFloat(firstNumberArray.join(""));
            screenText.innerHTML = parsedFirstNumber.toLocaleString();
        }
        else if (!firstNumberFinished) {
            screenText.innerHTML = "Máximo permitido de 9 dígitos";
            setTimeout(() => { screenText.innerHTML = parsedFirstNumber.toLocaleString() }, 1500);
        }

        if (firstNumberFinished) {
            if (secondNumberArray.length < 9) {
                currentNumber = parseFloat(element.innerHTML);
                secondNumberArray.push(currentNumber);
                parsedSecondNumber = parseFloat(secondNumberArray.join(""));
                screenText.innerHTML = parsedSecondNumber.toLocaleString();
            }
            else {
                screenText.innerHTML = "Máximo permitido de 9 dígitos";
                setTimeout(() => { screenText.innerHTML = parsedSecondNumber.toLocaleString() }, 1500);
            }
        }
    })
});

Array.from(operationButtons).forEach(element => {
    element.addEventListener("click", function() {
        operationSign = element.innerHTML;
        if (firstNumberArray.length > 0) {
            operationText.innerHTML = parsedFirstNumber + " " + operationSign;
            firstNumberFinished = true;
        }
        if (secondNumberArray.length > 0) {
            doOperation();
            operationText.innerHTML = parsedFirstNumber + " " + operationSign;
            firstNumberFinished = true;
        }
    })
})

allClearButton.addEventListener("click", () => {
    operationText.innerHTML = "";
    firstNumberArray = [];
    secondNumberArray = [];
    parsedFirstNumber = undefined;
    parsedSecondNumber = undefined;
    currentNumber = 0;
    operationSign = undefined;
    screenText.innerHTML = 0;
})

equalsButton.addEventListener("click", () => {
    if (secondNumberArray.length > 0) {
        doOperation();
        operationText.innerHTML = "";
    }
    if (!operationSign) {
        firstNumberArray = [];
    }
})


//Limpiar secondNumberArray
// firstNumberFinished = false
//  hace operación y la guarda en firstNumberArray
function doOperation() {
        secondNumberArray = [];
        firstNumberFinished = false;
        switch (operationSign) {
            case "+":
                let sumResult = sum(parsedFirstNumber, parsedSecondNumber);
                screenText.innerHTML = sumResult;
                firstNumberArray = [];
                firstNumberArray.push(sumResult);
                parsedFirstNumber = sumResult;
                break;
    
            case "-":
                let subsResult = substraction(parsedFirstNumber, parsedSecondNumber);
                screenText.innerHTML = subsResult;
                firstNumberArray = [];
                firstNumberArray.push(subsResult);
                parsedFirstNumber = subsResult;
                break;
            
            case "*":
                let multResult = multiplication(parsedFirstNumber, parsedSecondNumber);
                screenText.innerHTML = multResult;
                firstNumberArray = [];
                firstNumberArray.push(multResult);
                parsedFirstNumber = multResult;
                break;
            
            case "/":
                let divResult = division(parsedFirstNumber, parsedSecondNumber);
                screenText.innerHTML = divResult;
                firstNumberArray = [];
                firstNumberArray.push(divResult);
                parsedFirstNumber = divResult;
                break;
        }
}

function sum(num1, num2) {
    return num1 + num2;
}

function substraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return (num1 / num2);
}