
"use strict";

// Constructor function to create dog objects
function Dog(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display the dog's greeting
    this.myGreeting = function() {
        if (this.canTalk) {
            return `${this.mySound} I can talk!`;
        } else {
            return `${this.mySound} I cannot talk!`;
        }
    };
}

// Create two dog objects using the constructor
const brain = new Dog(
    "Brain",
    "Inspector Gadget",
    "Mixed breed",
    "Penny's pet dog and secret helper",
    "I'm the one solving the mysteries, but Gadget gets all the credit!",
    false
);

const bandit = new Dog(
    "Bandit",
    "Jonny Quest",
    "English Bulldog",
    "Jonny's loyal companion",
    "Woof! I'm always ready for another adventure!",
    false
);

// Store the dogs in an array
const dogs = [brain, bandit];

// Display each dog's properties using a for...in loop
let dogList = "";

for (const dog of dogs) {
    dogList += `<h2>${dog.name}</h2>`;

    for (const property in dog) {
        if (typeof dog[property] !== "function") {
            dogList += `<p>${property}: ${dog[property]}</p>`;
        }
    }
}

// Prompt the user to select a dog
const selection = prompt("Choose a dog: Brain or Bandit");

// Find the selected dog
let selectedDog = null;

if (selection !== null) {
    for (const dog of dogs) {
        if (dog.name.toLowerCase() === selection.trim().toLowerCase()) {
            selectedDog = dog;
            break;
        }
    }
}

// Display the results
const output = document.getElementById("output");

if (selectedDog !== null) {
    output.innerHTML = `
        <h2>Dog Information</h2>
        ${dogList}
        <h2>Selected Dog: ${selectedDog.name}</h2>
        <p>${selectedDog.myGreeting()}</p>
    `;
} else {
    output.innerHTML = `
        <h2>Dog Information</h2>
        ${dogList}
        <p>Sorry, the dog you selected does not exist.</p>
    `;
}
