export function getUserInput() {
    // We gotta make it a promise to wait til user gives us smt
    return new Promise((resolve) => {
        const inputField = document.getElementById("userInput"); // Input field at the bottom of the screen most likely
        const submitButton = document.getElementById("submitButton"); // Just in case we have a button
        // Function to handle input submission
        const handleInput = () => {
            const userInput = inputField.value.trim(); // Fuck spaces all my homies hate spaces
            if (userInput) { // Checks if there's an actual input and not just spaces that trim took out (trim ily)
                inputField.value = ""; // Clean up clean up (sun voice from SB)
                printToScreen(`> ${userInput}`); // Show input on screen
                resolve(userInput); // Input welcome home bbgirl
            }
        };
        // Button click handler
        submitButton.onclick = handleInput;
        // Using onkeypressed makes it angy so we using onkeydown instead
        inputField.onkeydown = (event) => {
            if (event.key === "Enter") { // When enter gets pressed
                event.preventDefault(); // No default enter action
                handleInput(); // Handle the input
            }
        };
    });
}
// Prints messages to the screen instead of console.log
export function printToScreen(message) {
    const outputDiv = document.getElementById("gameText");
    if (outputDiv) {
        outputDiv.innerHTML += `<p>${message}</p>`; // Append new message
    }
}
