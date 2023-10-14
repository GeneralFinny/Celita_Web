// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCxZHo4Hm-HmiXEHcTpdYs8STFZjCbEMe0",
    authDomain: "feedback-5c4e6.firebaseapp.com",
    databaseURL: "https://feedback-5c4e6-default-rtdb.firebaseio.com",
    projectId: "feedback-5c4e6",
    storageBucket: "feedback-5c4e6.appspot.com",
    messagingSenderId: "1000868145057",
    appId: "1:1000868145057:web:61771dad64efdd6822cde0"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var databaseRef = database.ref("feedback_data"); // Update with your desired database reference

// Function to send feedback data to Firebase
function sendFeedbackToFirebase(translatedWord, suggestedTranslation) {
    var feedbackData = {
        "Translated word": translatedWord,
        "Suggested translation": suggestedTranslation
    };

    // Push the data to the database
    databaseRef.push(feedbackData);
}

// Handle the translation form submission
document.getElementById("translation-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Your translation form submission logic here
});

// Other necessary functions and event listeners here

let lastFeedbackTime = 0; // Initialize the last feedback time variable

// Function to check if the input text contains unwanted characters
function hasUnwantedCharacters(inputText) {
    const regex = /[^a-zA-Z\s.,!?]/g; // Regular expression to check for unwanted characters
    return regex.test(inputText); // Returns true if unwanted characters are found, false otherwise
}

// Function to handle the feedback form submission
document.getElementById("feedback-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const translatedWord = document.getElementById("translated-word").value;
    const suggestedTranslation = document.getElementById("suggested-translation").value;

    // Check if the cooldown period has elapsed
    const currentTime = new Date().getTime();
    if (currentTime - lastFeedbackTime < 30000) { // 30,000 milliseconds = 30 seconds
        // If the cooldown period has not elapsed, display a warning message
        const feedbackContainer = document.getElementById("feedback-container");
        const warningMessage = document.createElement("p");
        warningMessage.textContent = "Please wait for 30 seconds before submitting another feedback.";
        warningMessage.style.color = "#f53e3e"; // Red color for the warning message
        feedbackContainer.appendChild(warningMessage);

        // Remove the warning message after a few seconds
        setTimeout(function () {
            feedbackContainer.removeChild(warningMessage);
        }, 3000); // Remove the warning message after 3 seconds (adjust as needed)

        return; // Stop the function execution
    }

    // Check for unwanted characters in the input text
    if (hasUnwantedCharacters(translatedWord) || hasUnwantedCharacters(suggestedTranslation)) {
        // Display an error message for invalid characters
        const feedbackContainer = document.getElementById("feedback-container");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Invalid characters detected. Please remove special characters and numbers.";
        errorMessage.style.color = "#f53e3e"; // Red color for the error message
        feedbackContainer.appendChild(errorMessage);

        // Remove the error message after a few seconds
        setTimeout(function () {
            feedbackContainer.removeChild(errorMessage);
        }, 3000); // Remove the error message after 3 seconds (adjust as needed)

        return; // Stop the function execution
    }

    // If the cooldown period has elapsed and no unwanted characters are found, proceed with the feedback submission
    lastFeedbackTime = currentTime; // Update the last feedback time

    // Send the feedback to Firebase
    sendFeedbackToFirebase(translatedWord, suggestedTranslation);

    // Clear feedback form input fields
    document.getElementById("translated-word").value = "";
    document.getElementById("suggested-translation").value = "";

    // Display a "Feedback Sent" message
    const feedbackContainer = document.getElementById("feedback-container");
    const feedbackSentMessage = document.createElement("p");
    feedbackSentMessage.textContent = "Feedback Sent!";
    feedbackSentMessage.style.color = "#0f976c"; // Green color

    // Remove the previous warning message if it exists
    const previousWarningMessage = document.querySelector("#feedback-container p");
    if (previousWarningMessage) {
        previousWarningMessage.remove();
    }

    feedbackContainer.appendChild(feedbackSentMessage);

    // Automatically remove the "Feedback Sent" message after a few seconds
    setTimeout(function () {
        feedbackContainer.removeChild(feedbackSentMessage);
    }, 3000); // Remove the message after 3 seconds (adjust as needed)
});

// Clear history button functionality
document.getElementById("clear-history").addEventListener("click", function () {
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.innerHTML = ""; // Clear chat history
});

// Show feedback form when clicking the feedback button
document.getElementById("feedback-button").addEventListener("click", function () {
    document.getElementById("feedback-container").style.display = "block";
});

document.getElementById("close-feedback").addEventListener("click", function () {
    document.getElementById("feedback-container").style.display = "none";
});

// Add this JavaScript to toggle between light and dark modes
const toggleSwitch = document.querySelector('#toggle-theme');
const body = document.querySelector('body');
const headers = document.querySelectorAll('header, h1, h2, h3, .experimental-text, .clear-button, #feedback-button, #feedback-container, #close-feedback, #send-feedback, #translated-word, #suggested-translation');

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        headers.forEach(item => {
            item.classList.remove('light-mode');
            item.classList.add('dark-mode');
        });
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        headers.forEach(item => {
            item.classList.remove('dark-mode');
            item.classList.add('light-mode');
        });
    }
});
