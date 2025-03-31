export function getUserInput(): Promise<string> {
    // We gotta make it a promise to wait til user gives us smt
    return new Promise((resolve) => {
        const inputField = document.getElementById("userInput") as HTMLInputElement; // Input field at the bottom of the screen most likely

        // Function to handle input submission
        const handleInput = () => {
            const userInput = inputField.value.trim(); // Fuck spaces all my homies hate spaces
            if (userInput) { // Checks if there's an actual input and not just spaces that trim took out (trim ily)
                inputField.value = ""; // Clean up clean up (sun voice from SB)
                printToScreen(`> ${userInput}`); // Show input on screen
                resolve(userInput); // Input welcome home bbgirl
                inputField.removeEventListener("keydown", onKeydown); // Remove listener to avoid dupes
            }
        };

        // Using onkeypressed makes it angy so we using onkeydown instead
        const onKeydown = (event: KeyboardEvent) => {
            if (event.key === "Enter") { // When enter gets pressed
                event.preventDefault(); // No default enter action
                handleInput(); // Handle the input
            }
        };

        inputField.addEventListener("keydown", onKeydown); // Listen for enter key
        inputField.focus(); // Auto-focus input when waiting for user input
    });
}

// Prints messages to the screen instead of console.log
export function printToScreen(message: string): void {
    const outputDiv = document.getElementById("gameText");
    if (outputDiv) {
        outputDiv.innerHTML += `<p>${message}</p>`; // Append new message
    }
}
