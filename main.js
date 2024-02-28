let usedNumbers = [];
let numOfStudents;
const students = {1: ['Joselyn', 'David', 'Miguel', 'Jordan', 'Isaac', 'Dellis', 'Ericka', 'Victor', 'Alondra', 'Frankie', 'Alexis', 'Sylas', 'Gabriella', 'Juana C.', 'Alex G.', 'Samuel', 'Amir', 'Juana S.', 'Abigail', 'Kelly', 'Austin', 'Marisola', 'Candelaria', 'Daniel', 'Lucas', 'Aiden', 'Litzy', 'Jazmani'], 4: ['Cooper', 'Hannah', 'Lesly', 'Marlene', 'Reyna', 'Katelyn', 'Matea', 'Perla', 'Anndy', 'Andrea', 'Alton', 'Eimy', 'Juan', 'Pedro'], 5: ['Marcos', 'Wolfgang', 'Jazlyn', 'Adrian', 'Michelle', 'Cristian', 'Oscar', 'Jayden', 'Marwa', 'Wilber', 'Jaylin', 'Alexa', 'Jose', 'Erica', 'Paloma', 'Andi', 'Kevin', 'Tomasa', 'David', 'Esmeralda', 'Johan']};
let calledStudents = [];

const animateCSS = (selector, animation, prefix = 'animate__') =>
    new Promise((resolve, reject) => {
        const element = document.querySelector(selector);
        element.classList.add(`${prefix}animated`, `${prefix}${animation}`);

        function handleAnimationEnd() {
            element.classList.remove(`${prefix}animated`, `${prefix}${animation}`);
            resolve('Animation ended');
        }

        element.addEventListener('animationend', handleAnimationEnd, {once: true});
});

function getRNG() {
    animateCSS("#rngButton", "rotateIn");
    const calledNumbersContainer = document.getElementById("calledNumbers");
    const calledNumbersHeader = document.getElementById("calledNumbersHeader");
        
        if (usedNumbers.length === students[document.getElementById('classBlock').value].length) {
            document.getElementById("randomNumber").innerText = 'All Done!';
            usedNumbers = [];
            calledStudents = [];
            document.getElementById('calledNumbers').innerHTML = ''; // Clear the list when all students are called
            document.getElementById('calledNumbersHeader').innerText = ''; // Clear the header text
        
        } else {
        
        let rNum;
        do {
            rNum = Math.floor(Math.random() * students[document.getElementById('classBlock').value].length);
        } while (usedNumbers.includes(rNum));
        
        const studentName = students[document.getElementById('classBlock').value][rNum];
        
        // Set inner text of calledNumbersHeader to 'Already Called' when the first name is called
        if (calledStudents.length === 0) {
            calledNumbersHeader.innerText = 'Already Called';
        }
        
        // Create a new span element for the student name
        const newStudentElement = document.createElement("span");
        newStudentElement.textContent = (calledStudents.length > 0 ? ', ' : '') + studentName;
        
        // Apply the fadeIn animation class to the new span element
        newStudentElement.classList.add("animate__animated", "animate__fadeIn");
        
        // Append the new span element to the container
        calledNumbersContainer.appendChild(newStudentElement);
        
        usedNumbers.push(rNum);
        calledStudents.push(studentName);
        
        document.getElementById("randomNumber").innerText = studentName;
        animateCSS("#randomNumber", "rollIn");
        
    }
}

function getBlock() {
  numOfStudents = document.getElementById("classBlock").value;
    document.getElementById("randomNumber").innerText = '';
    usedNumbers = [];
    calledStudents = [];
    document.getElementById('calledNumbers').innerHTML = ''; // Clear the list when all students are called
    document.getElementById('calledNumbersHeader').innerText = ''; // Clear the header text
}
