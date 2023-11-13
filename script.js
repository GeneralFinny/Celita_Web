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







document.addEventListener('DOMContentLoaded', function () {
    



    const chatContainer = document.querySelector('.chat-container');

    // Function to display the initial bot greeting message
    function displayInitialGreeting() {
        const initialGreeting = "Hello, let's start translating!";
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container bot-message-container';

        const botIcon = document.createElement('img');
        botIcon.src = 'bot.png'; // Replace with the path to your bot icon image
        botIcon.className = 'bot-icon';

        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = initialGreeting;
        botMessage.title = `Sent at ${getCurrentTime()}`; // Add tooltip displaying the time

        messageContainer.appendChild(botIcon);
        messageContainer.appendChild(botMessage);
        chatContainer.appendChild(messageContainer);

        // Scroll to the bottom of the chat container to show the latest message
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    displayInitialGreeting();
    let translationAllowed = true; // Flag to track whether the translation is allowed
    let vulgarWords = []; // Initialize an empty array to store the vulgar words
    let placeholderMessage;
    let translateButton;

    fetch('vulgar_words.txt')
        .then(response => response.text())
        .then(data => {
            vulgarWords = data.split('\n').map(word => word.trim());
        })
        .catch(error => {
            console.error('Error fetching vulgar words:', error);
        });

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    function displayUserMessage(inputText) {
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container user-message-container';

        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = inputText;
        userMessage.title = `Sent at ${getCurrentTime()}`;

   

     
        messageContainer.appendChild(userMessage);
        chatContainer.appendChild(messageContainer);

        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    const translationForm = document.getElementById('translation-form');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    let translationOptions = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            console.log(checkbox.value);
        }
    });
    
    checkboxes.forEach(checkbox => {
        if (checkbox.value === 'Cebuano') {
            checkbox.checked = true;
            translationOptions.push(checkbox.value);
        }
    
        checkbox.addEventListener('click', function (event) {
            if (checkbox.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== checkbox) {
                        cb.checked = false;
                    }
                });
                translationOptions = [checkbox.value];
            } else {
                checkbox.checked = true;
            }
            translationForm.setAttribute('data-translation-options', translationOptions.join(','));
        });
    });

    translationForm.setAttribute('data-translation-options', translationOptions.join(','));
    translationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const inputText = document.getElementById('input-text').value;
        const translationOptions = translationForm.getAttribute('data-translation-options');

        if (containsVulgarWord(inputText, vulgarWords)) {
            displayCensoredUserMessage(inputText, vulgarWords);
            clearInput();
        } else {
            translateText(inputText, translationOptions);
        }
    });

    function displayBotMessageWithAnimation(translatedText) {
        const botIcon = placeholderMessage.querySelector('.bot-icon');
        const botMessage = placeholderMessage.querySelector('.bot-message');
        if (botIcon && botMessage) {
            botMessage.textContent = translatedText;
            botMessage.classList.add('animate__animated', 'animate__tada');
            translateButton.disabled = false;
        }
    }

    function translateText(inputText, translationOptions) {
        const translateButton = document.querySelector('#translation-form input[type="submit"]');
        translateButton.disabled = true; // Disable the translate button during the translation process
        const chatContainer = document.querySelector('.chat-container');

        // Display the user input with the user icon
        displayUserMessage(inputText);

        // Create a placeholder message indicating the bot is still processing
        placeholderMessage = displayBotPlaceholderMessage();

        // Perform the translation fetch
        fetch("https://celitasiumbonaparte.pythonanywhere.com/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache" // Add this line to set the Cache-Control header
            },
            body: JSON.stringify({
                input_text: inputText,
                translation_options: translationOptions
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                document.getElementById('translation-form').reset();

                // Check if the "translated_text" property exists in the response data
                if (data.translated_text) {
                    // Remove the placeholder message and add the actual translated text
                    updateBotMessageWithAnimation(data.translated_text);
                } else {
                    // If there's no "translated_text," display an error message or handle the situation accordingly
                    console.error("Translation error: Translated text not found in the response.", data.error);
                    translateButton.disabled = false;
                }

                // Scroll to the bottom of the chat container to show the latest message
                chatContainer.scrollTop = chatContainer.scrollHeight;
            })
            .catch(error => {
                // Display an error message for network issues, but not for other errors
                console.error('Translation error:', error);
                if (error.message === 'Network response was not ok') {
                    displayTranslationError();
                }
                translateButton.disabled = false;
            });
    }


    function displayCensoredUserMessage(inputText, vulgarWords) {
        const chatContainer = document.querySelector('.chat-container');
        
        const messageContainer = document.createElement('div');
        messageContainer.className = 'message-container user-message-container';
        
        const userIcon = document.createElement('img');
        userIcon.src = 'user.png'; // Replace with the path to your user icon image
        userIcon.className = 'user-icon';
        
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = ` ${censorText(inputText, vulgarWords)}`;
        userMessage.title = `Sent at ${getCurrentTime()}`; // Add tooltip displaying the time
        
        
        messageContainer.appendChild(userMessage);
        chatContainer.appendChild(messageContainer);
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'banned-message';
        errorMessage.textContent = 'Banned words detected.';
        
        chatContainer.appendChild(errorMessage);
        
        // Scroll to the bottom of the chat container to show the latest message
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function clearInput() {
        document.getElementById('input-text').value = '';
    }

    function containsVulgarWord(text, vulgarWords) {
        for (let i = 0; i < vulgarWords.length; i++) {
            if (text.toLowerCase().includes(vulgarWords[i].toLowerCase())) {
                return true;
            }
        }
        return false;
    }

    function censorText(text, vulgarWords) {
        let censoredText = text;
        for (let i = 0; i < vulgarWords.length; i++) {
            const regex = new RegExp(`\\b${vulgarWords[i]}\\b`, 'gi');
            censoredText = censoredText.replace(regex, "[CENSORED]");
        }
        return censoredText;
    }

    function displayBotPlaceholderMessage() {
        const chatContainer = document.querySelector('.chat-container');
    
        // Create a placeholder message indicating the bot is still processing
        const placeholderMessage = document.createElement('div');
        placeholderMessage.className = 'message-container bot-message-container';
        placeholderMessage.innerHTML = '<img src="bot.png" class="bot-icon" alt="Bot Icon"><div class="bot-message"><img src="l2.gif" alt="Loading..." width="15" height="15"></div>';
        chatContainer.appendChild(placeholderMessage);
    
        // Scroll to the bottom of the chat container to show the latest message
        chatContainer.scrollTop = chatContainer.scrollHeight;
    
        return placeholderMessage; // Return the placeholder message
    }


    const optionsButton = document.getElementById('options-button');
    const additionalOptionsContainer = document.getElementById('additional-options-container');
    const closeOptionsButton = document.getElementById('close-options-button');

    optionsButton.addEventListener('click', () => {
        additionalOptionsContainer.style.display = 'block';
    });

    closeOptionsButton.addEventListener('click', () => {
        additionalOptionsContainer.style.display = 'none';
    });



    //TTS Test part
    
    function playTranslatedText(text) {
        let lang;
    
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let selectedLanguage;
    
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedLanguage = checkbox.value;
            }
        });
    
        console.log("Selected Language inside playTranslatedText:", selectedLanguage);
    
        switch (selectedLanguage) {
            case 'Tagalog':
                lang = 'tl';
                break;
            case 'Cebuano':
                lang = 'tl';
                break;
            case 'English':
                lang = 'en';
                break;
            default:
                lang = 'tl'; // Default to Tagalog if no language is selected
        }
    
        fetch(`https://celitasiumoverdrive.pythonanywhere.com/text_to_speech/${text}/${lang}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const audio = new Audio(url);
                audio.volume = 1; // Set the volume to 100%
                audio.play();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

// Update the bot message function to include the speaker icon and play functionality
function updateBotMessageWithAnimation(translatedText) {
  const botIcon = placeholderMessage.querySelector('.bot-icon');
  const botMessage = placeholderMessage.querySelector('.bot-message');
  if (botIcon && botMessage) {
    botMessage.textContent = translatedText;
    botMessage.classList.add('animate__animated', 'animate__tada');

    // Add the speaker icon button
    const speakerIcon = document.createElement('button');
    speakerIcon.classList.add('speaker-icon');
    speakerIcon.addEventListener('click', function () {
      playTranslatedText(translatedText);
    });

    const sound = new Audio('ambatukam.mp3'); // Replace 'path_to_your_sound_file.mp3' with the file path of your sound file
    sound.play(); // Play the sound

        // Add the speaker icon image
        const speakerIconImage = document.createElement('img');
        speakerIconImage.src = 'speaker-24.png'; // Replace 'path_to_your_speaker_icon.png' with your speaker icon's file path
        speakerIconImage.alt = 'Speaker Icon'; // Add an alt attribute for accessibility
        speakerIcon.appendChild(speakerIconImage); // Append the image to the speaker icon button
    // Append the speaker icon button to the bot message container


    placeholderMessage.appendChild(speakerIcon);

    if (translateButton) {
      translateButton.disabled = false;
    } else {
      console.error('Translate button is not defined.');
      translateButton.disabled = false;
    }
  } else {
    console.error('Bot icon or message not found.');
    translateButton.disabled = false;
  }
}






    
});
let recognition;

function toggleMic() {
  var micButton = document.getElementById('mic-button');
  var isMicOn = micButton.classList.contains('active');

  if (!isMicOn) {
    // Change the mic icon to indicate that it's on
    micButton.classList.add('active');
    console.log('Mic is now on');

    // Clear the translation form
    document.getElementById('input-text').value = '';

    // Implement the action you want when the mic is on
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    // Get the selected language from the checkboxes
    const translateToTagalog = document.getElementById('translateToTagalog').checked;
    const translateToCebuano = document.getElementById('translateToCebuano').checked;
    const translateToEnglish = document.getElementById('translateToEnglish').checked;

    // Set the language based on the selected checkbox
    if (translateToTagalog) {
      recognition.lang = 'fil-PH'; // Set the language to Tagalog
      console.log('Recognizing in Tagalog');
    } else if (translateToCebuano) {
      recognition.lang = 'fil-PH'; // Set the language to Cebuano
      console.log('Recognizing in Cebuano');
    } else if (translateToEnglish) {
      recognition.lang = 'en-US'; // Set the language to English
      console.log('Recognizing in English');
    } else {
      recognition.lang = 'en-US'; // Default to English if no option is selected
      console.log('Recognizing in the default language (English)');
    }

    recognition.onresult = function(event) {
      const transcript = event.results[event.results.length - 1][0].transcript;
      // Display the transcript in the input field inside translation-form
      document.getElementById('input-text').value = transcript;
    };

    recognition.start();
  } else {
    // Change the mic icon to indicate that it's off
    micButton.classList.remove('active');
    console.log('Mic is now off');

    // Clear the translation form
   

    // Implement the action you want when the mic is off
    if (recognition) {
      recognition.stop();
    }
  }
}
