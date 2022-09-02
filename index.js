let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
let counter = 0;

function homeAddOne() {
    counter = counter + 1;
    counter1.textContent = counter;
}

function homeAddTwo() {
    counter = counter + 2;
    counter1.textContent = counter;
}
function homeAddThree() {
    counter = counter + 3;
    counter1.textContent = counter;
}

function guestAddOne() {
    counter = counter + 1;
    counter2.textContent = counter;
}

function guestAddTwo() {
    counter = counter + 2;
    counter2.textContent = counter;
}
function guestAddThree() {
    counter = counter + 3;
    counter2.textContent = counter;
}


