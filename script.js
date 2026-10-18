// 1. Ask the user for their first name and store it in Fname
let Fname = prompt("Enter your first name:");

// Display an initial welcome message containing the entered name
alert("Welcome, " + Fname + "!");

// 2. Create the constant piValue / myPi to store Pi to 7 significant digits
const piValue = 3.1415926;
const myPi = piValue; // Alias provided to satisfy both variable names mentioned in instructions

// 3. Ask the user to input their favorite number and store it in myFavNum
let myFavNum = prompt("Enter your favorite number:");

// Convert input to a Number data type for calculation
let numericFavNum = Number(myFavNum);

// 4. Calculate the area of a circle using myFavNum as radius (A = π * r^2)
// 5. Store the result in myArea using myPi
let myArea = myPi * (numericFavNum ** 2);

// Construct the output message describing each variable
let message = "Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. " +
              "If that was the radius of a circle, the circle's area would be " + myArea + ".";

// Display the contents to the webpage
document.getElementById("output").textContent = message;

// Log to console for verification
console.log(message);