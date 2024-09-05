let usedNumbers = [];
let numOfStudents;
const students = {3: ['Alexa', 'Mariana', 'Angel', 'Juana', 'Juan', 'Ernesto', 'Payton', 'Katrina'], 4: ['Alex', 'Luis', 'Aleena', 'Abigail', 'Diego', 'Yairo', 'Alexa', 'Alonso', 'Candelaria', 'Zabian', 'Xavier', 'Esmeralada', 'Fabian', 'Jared', 'Vianca', 'Jocelyn', 'Jaselyn', 'Mariana', 'Jaylin'], 5: ['Javier', 'Cristiano', 'Jose', 'Ryan', 'Janie', 'Oscar', 'Kaeden', 'Yeraldin', 'Daivendz', 'Yareli', 'Jonathan', 'Edhin', 'Jackie', 'Keren', 'Sebastian', 'Hayden', 'Melisssa', 'Sammy']};
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
    animateCSS("#rngButtonContainer", "rotateIn");
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

        setTimeout(function() {

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
        animateCSS("#randomNumber", "flip");
    
        }, 800);
        
    }
}

function getBlock() {
  numOfStudents = document.getElementById("classBlock").value;
    document.getElementById("randomNumber").innerText = 'Select Block and Click Get Student to Start!';
    usedNumbers = [];
    calledStudents = [];
    document.getElementById('calledNumbers').innerHTML = ''; // Clear the list when all students are called
    document.getElementById('calledNumbersHeader').innerText = ''; // Clear the header text
}
