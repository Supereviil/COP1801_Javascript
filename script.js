const outputDiv = document.getElementById("output");

// Function to display messages on the webpage
function displayMessage(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    outputDiv.appendChild(paragraph);
}

// Function to validate the service quality
function validateQuality(quality) {
    return quality === "excellent" || quality === "good" || quality === "poor";
}

// Function to validate the service amount
function validateAmount(amount) {
    return Number.isFinite(amount) && amount >= 5 && amount <= 500;
}

// Function to calculate and return the recommended tip
function calculateTip(amount, quality) {
    let tipPercentage;

    if (quality === "excellent") {
        tipPercentage = 0.20;
    } else if (quality === "good") {
        tipPercentage = 0.15;
    } else {
        tipPercentage = 0.10;
    }

    return amount * tipPercentage;
}

// Prompt the user for the service amount
const amountInput = prompt("Enter the service amount in dollars ($5.00 - $500.00):");
const serviceAmount = Number(amountInput);

// Prompt the user for the service quality
const qualityInput = prompt("Enter the service quality (excellent, good, or poor):");
const serviceQuality = qualityInput === null ? "" : qualityInput.trim().toLowerCase();

// Validate the entered information
if (amountInput === null || amountInput.trim() === "" || !validateAmount(serviceAmount)) {
    displayMessage("Invalid service amount. Please enter an amount between $5.00 and $500.00.");
} else if (!validateQuality(serviceQuality)) {
    displayMessage("Invalid service quality. Please enter excellent, good, or poor.");
} else {
    // Calculate the recommended tip
    const tipAmount = calculateTip(serviceAmount, serviceQuality);

    // Display the results
    displayMessage("Service Amount: $" + serviceAmount.toFixed(2));
    displayMessage("Service Quality: " + serviceQuality);
    displayMessage("Recommended Tip: $" + tipAmount.toFixed(2));
}
