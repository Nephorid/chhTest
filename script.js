const randomNumbersContainer = document.getElementById('random-numbers');
const userInput = document.getElementById('user-input');
const numberButtonsContainer = document.getElementById('number-buttons');
let randomNumbers = [];

function shuffleButtons() {
    for (let i = numberButtonsContainer.children.length; i >= 0; i--) {
        numberButtonsContainer.appendChild(numberButtonsContainer.children[Math.random() * i | 0]);
    }
}

function generateRandomNumbers() {
    randomNumbers = [];
    randomNumbersContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        randomNumbers.push(randomNumber);
        randomNumbersContainer.innerHTML += randomNumber + ' ';
    }
}

function createNumberButtons() {
    numberButtonsContainer.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.onclick = function() {
            addNumber(i);
        };
        numberButtonsContainer.appendChild(button);
    }
}

function addNumber(number) {
    userInput.value += number;
}

function checkNumbers() {
    const userEnteredNumbers = userInput.value;

    let isCorrect = true;
    for (let i = 0; i < 5; i++) {
        if (parseInt(userEnteredNumbers[i]) !== randomNumbers[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        alert('Ardicilliq Dogrudur!');
        generateRandomNumbers();
        userInput.value = '';
        shuffleButtons();
    } else {
        alert('Ardicilliq Sehvdir!');
        userInput.value = '';
    }
}

generateRandomNumbers();
createNumberButtons();
shuffleButtons();
