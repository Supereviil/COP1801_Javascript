// Gets the main output container element from the webpage
const outputDiv = document.getElementById("output");

// Helper function to append text directly to the webpage
function displayMessage(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    outputDiv.appendChild(paragraph);
}

// For Loop (Odd or Even 0 to 10)
displayMessage("--- Task 1: For Loop (Odd or Even) ---");

for (let i = 0; i <= 10; i++) {
    // Checks if the current number is divisible by 2 with no remainder
    if (i % 2 === 0) {
        displayMessage("Count " + i + " is even");
    } else {
        displayMessage("Count " + i + " is odd");
    }
}

// Do While Loop with User Input
displayMessage("--- Task 2: Do While Loop ---");

// Prompts the user for a number between 5 and 20
let myNum = prompt("Please enter a number between 5 and 20:");

// Converts input string to a number
myNum = Number(myNum);

// Initializes loop counter at 1
let counter = 1;

// Execute the loop at least once and continue until counter reaches myNum
do {
    displayMessage("Do While Loop Counter: " + counter);
    counter++;
} while (counter <= myNum);

// Arrays & Array Methods
displayMessage("--- Task 3: Array Values with forEach() ---");

// Stores the subjects in an array
const subjects = ["History", "Literature", "Programming", "Marine Biology", "Nursing"];

// Displays each subject using the forEach() method
subjects.forEach(function(subject) {
    displayMessage("Subject: " + subject);
});

displayMessage("--- Task 3: Array Values Separated by Commas ---");

// Displays all array elements separated by commas in a single statement using .join()
displayMessage("Subjects list: " + subjects.join(", "));