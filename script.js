"use strict";

// Part 1: Create an object using an object literal
const myDog = {
    name: "Brain",
    show: "Inspector Gadget",
    breed: "Mixed breed",
    role: "Penny's pet dog and secret helper",
    mySound: "I'm the one solving the mysteries, but Gadget gets all the credit!"
};

// Display the object literal information
const dogMessage = `Hello, my name is ${myDog.name}.
When I bark, ${myDog.mySound}
I starred in the TV show ${myDog.show}.
My character is a ${myDog.breed}.
I am ${myDog.role}.`;


// Part 2: Create a dog using an object constructor
function Dog(name, show, breed, role, mySound, canTalk) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.role = role;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Method to display the dog's greeting
    this.myGreeting = function() {
        return `Hello, my name is ${this.name}.
When I bark, ${this.mySound}
I starred in the TV show ${this.show}.
My character is a ${this.breed}.
I am ${this.role}.
Can I talk? ${this.canTalk ? "Yes!" : "No!"}`;
    };
}

// Create an object using the constructor
const myDogConst = new Dog(
    "Brain",
    "Inspector Gadget",
    "Mixed breed",
    "Penny's pet dog and secret helper",
    "I'm the one solving the mysteries, but Gadget gets all the credit!",
    false
);


// Part 3: Display both objects on the webpage
const output = document.getElementById("output");

output.innerHTML = `
    <h2>Object Literal</h2>
    <p>${dogMessage}</p>

    <h2>Object Constructor</h2>
    <p>${myDogConst.myGreeting()}</p>
`;
