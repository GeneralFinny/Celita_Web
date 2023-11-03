/* Reset default browser styles */

h1,
p,
ul,
li,
button,
input {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}
h3 {
    color: #ffffff; /* Set the text color */
    text-align: center; /* Center the text */
    font-size: 20px; /* Set the font size */
    margin-top: 30px; /* Add margin to the top */
    position: relative;
    top: 10px;
    margin-left: 30px;
    margin-right: 80px;
    display: inline-block; /* Set display property to inline-block */
}

#options-button {
    margin-top: 20px;
    width: 10px;
    height: 10px;
    background-color: transparent;
    border: none;
    padding: 18px;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    background-image: url('addop2.png');
    background-size: 80%; /* Adjust the background size as needed */
    background-repeat: no-repeat;
    background-position: center;
    position: absolute; /* Set the position to absolute */
    top: 10px;
    right: 0; /* Position the button at the rightmost corner */
    margin-right: 30px;
}

/* Set a modern font */
body {
    font-family: 'Inter', sans-serif;
    background-color: #232323; /* Grey background */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}




/* Style headings */
h1,
h2,
h3 {
    margin-bottom: 20px;
    color: #ffffff;
}

.experimental-text {
    font-size: 14px;
    color: #888;
}

/* Chat container scrollbar styles */
.chat-container::-webkit-scrollbar {
    width: 10px; /* Set the width of the scrollbar */
}

.chat-container::-webkit-scrollbar-thumb {
    background-color: #333; /* Thumb color */
    border-radius: 5px; /* Rounded corners for the thumb */
}

.chat-container::-webkit-scrollbar-track {
    background-color: #202020; /* Track color */
}

/* Dark mode scrollbar for Firefox */
.chat-container {
    scrollbar-color: #333 #202020; /* Thumb color and track color */
}
body, html {
    overflow: hidden;
    height: 100%;
}

.container {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #130931;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
}

#fixed-container {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100%); /* Adjust the width to create some space on the sides */
    max-width: 600px;
    padding: 10px;
    padding-left: 20px;
    padding-top: 0px;
    height: 65px; /* Adjust the height as needed */
    box-shadow: 0 4px 6px rgba(21, 4, 46, 0.1);
    background-color: #07031d;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
}

.chat-container {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column; /* Set the message order to normal */
    align-items: flex-start; /* Adjust the alignment for the messages */
    justify-content: flex-start; /* Adjust the alignment for the messages */
    padding: 10px;
    scrollbar-color: #333 #202020;
    scrollbar-width: thin;
    background-image: url('bg.png');
    background-size: cover; /* Adjust the size of the background image */
    background-position: center; /* Adjust the position of the background image */
    background-repeat: no-repeat; /* Prevent the background image from repeating */
    background-color: #141414;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 70px; /* Adjust the value to leave space for the fixed container */
    overflow-y: auto; /* Add vertical scrolling */
}

.user-message-container {
    align-self: flex-end; /* Adjust the alignment for the user messages to the right */
}

.bot-message-container {
    align-self: flex-start; /* Adjust the alignment for the bot messages to the left */
}


/* Media query for mobile devices */
@media only screen and (max-width: 600px) {
    body, html {
        position: fixed;
    }

    .container {
        height: 100%;
    }

    .chat-container {
        height: calc(100% - 80px); /* Adjust the value to leave space for the fixed container */
    }
}



  .message-container {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  

  
  .user-message {
    color: #fff;
    font-size: 20px;
    background-color: #590fe4 !important;
    max-width: 70%;
    margin: 10px 5px;
    margin-right: 15px;
    padding: 15px;
    border-radius: 50px;
    position: relative;
    margin-bottom: 1px;
    word-wrap: break-word;
  }
  
  .bot-message {
    background-color: #de6f00 !important;
    color: #ffffff;
    font-size: 20px;
    margin: 10px 5px;
    padding: 15px;
    border-radius: 50px;
    margin-bottom: 1px;
    word-wrap: break-word; /* Add this property to break long words */
}
  
  .user-icon,
  .bot-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 10px;
  }
.banned-message {
    color: red;
    display: flex;
    justify-content: flex-end;
    
   
  }
.translating-text {
    align-self: left;
    padding: 10px;
}





#translation-form input[type="text"] {
    width: calc(100% - 85px); /* Adjusted width to accommodate the button width */
    padding: 15px;
    height: 40px;
    border: 1px solid #1d1a1a;
    border-radius: 50px;
    margin-bottom: 10px;
    background-color: #ffffff; /* Replace with your desired color code for the text box */
    color: #000000;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    box-sizing: border-box; /* Ensure padding and border are included in the width */
    display: inline-block; /* Set the display property to inline-block */
}

#translation-form input[type="text"]:focus {
    outline: none;
}

#translate-button {
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    padding: 18px;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    background-image: url('send.png');
    background-size: 60%; /* Adjust the background size as needed */
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: -12px;
   ;
    
}

#translate-button:hover {
    background-color: #4CAF50; /* Change this to your desired hover color */
}

#input-text:focus + #translate-button {
    background-color: #4CAF50; /* Change this to your desired focus color */
    width: 20px;
    height: 20px;
}



#translate-button i, #mic-button i {
    color: #ffffff;
    outline: none;
}

#translate-button:hover, #mic-button:hover {
    background-color: transparent;
    color: #848484;
}

#translate-button:hover i, #mic-button:hover i {
    color: #848484;
}

#translation-options-form {
    width: 100%;
    display: flex;
    flex-direction: column;
}


#image-button {
    width: 20px;
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    font-size: 25px;

    outline: none;
}

#image-button i {
    color: #ffffff;
}

#image-button:hover {
    background-color: transparent;
    color: #848484;
}

#image-button:hover i {
    color: #848484;
}


/* Additional options container */


#close-options-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
}


.hidden {
    display: none;
}



.translating-text {
    color: #fff;
}

.clear-button,
#feedback-button {
    background: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    margin: 10px;
    position: relative; /* Add margin around the buttons */
    left: -130px;
}



#feedback-container {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #270042;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 100;
    color: #fff;
    max-width: 90%;
    width: 500px;
    box-sizing: border-box;
    opacity: 1;
}




/* Style for the input elements inside the feedback container */
#feedback-form input[type="text"] {
    width: calc(100% - 20px); /* Adjusted width to accommodate padding */
    max-width: calc(100% - 20px); /* Adjusted max-width to accommodate padding */
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #ffffff; /* Replace with your desired color code for the text box */
    color: #000000;
    font-size: 18px;
    box-sizing: border-box; /* Ensure padding and border are included in the width */
}
/* Styles for the close button */
#close-feedback {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
}

/* Margin for form elements */
#feedback-form label,
#feedback-form input,
#feedback-form button {
    margin: 10px 0;
}

/* Style for the "Send" button */
#send-feedback {
    background-color: #1a9e5e;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

/* Add hover effect to the "Clear History" button */
.clear-button:hover {
    color: #848484; /* Text color on hover */
}

/* Add hover effect to the "Send Feedback" button */
#feedback-button:hover {
    color: #848484; /* Change text color on hover */
}
/* Add hover effect to the "Send" button in the feedback form */
#send-feedback:hover {
    background-color: #214d37; /* Background color on hover */
    color: #ffffff; /* Text color on hover */
}

/* Add hover effect to the close button in the feedback form */
#close-feedback:hover {
    color: #676767; /* Text color on hover */
}

.switch {
    position: absolute;
    top: 10px;
    right: -10px;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    width: 40px; /* Adjusted width */
    height: 20px; /* Adjusted height */
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px; /* Adjusted height */
    width: 16px; /* Adjusted width */
    left: 4px;
    bottom: 2px; /* Adjusted position */
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(20px); /* Adjusted translation value */
    -ms-transform: translateX(20px); /* Adjusted translation value */
    transform: translateX(20px); /* Adjusted translation value */
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

/* Light mode specific styles */
body.light-mode {
    background-color: #f4f4f4;
    color: #000; /* Set text color to black in light mode */
}

.container.light-mode {
    background-color: #ffffff;
}

header.light-mode {
    background-color: #7e79ff;
    color: #212529;
}

h1.light-mode,
h2.light-mode,
h3.light-mode {
    color: #212529;
}

.experimental-text.light-mode {
    color: #111111;
}

.chat-container.light-mode {
    background-color: #ffffff;
}

.switch.light-mode {
    top: 20px;
    right: 20px;
}

.slider.light-mode {
    background-color: #ccc;
}

.slider.light-mode:before {
    background-color: #212529;
}

input:checked.light-mode + .slider.light-mode {
    background-color: #2196F3;
}

input:focus.light-mode + .slider.light-mode {
    box-shadow: 0 0 1px #2196F3;
}

.banned-message.light-mode {
    color: red;
}

/* Ensure all text in light mode is black */
body.light-mode,
h1.light-mode,
h2.light-mode,
h3.light-mode,

.chat-container.light-mode,
.banned-message.light-mode 
.input-text.light-mode{
    background-color: white;
    color: #000;
}

/* Styles for the dark mode switch in light mode */
.switch.light-mode {
    top: 20px;
    right: 20px;
}

.slider.light-mode {
    background-color: #ccc;
}

.slider.light-mode:before {
    background-color: #212529;
}

input:checked.light-mode + .slider.light-mode {
    background-color: #2196F3;
}

input:focus.light-mode + .slider.light-mode {
    box-shadow: 0 0 1px #2196F3;
}
#hide-header-button {
    position: fixed;
    top: 5px;
    left: 10px;
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    z-index: 1; /* Ensure the button stays on top of other elements */
}
.light-mode input[type="text"] {
    border: 1px solid #d4d4d4; /* Adjust border color for light mode */
}

#additional-options-container {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #13063e;
    padding: 20px; /* Adjusted padding to remove extra space on all sides */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    z-index: 2;
    color: #fff; /* White text color */
    max-width: 80%; /* Adjusted maximum width to make it responsive */
    width: 500px; /* Set width to auto to allow it to adjust based on the content */
    box-sizing: border-box; /* Ensure padding and border are included in the width */
    display: flex;
    flex-direction: column; /* Set the content to display vertically */
    align-items: flex-start; /* Align the content to the start horizontally */
}

#additional-options-container button {
    margin-top: 10px; /* Add some space between each button */
}
#translation-options-form div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

#translation-options-form input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid #ffffff;
    border-radius: 5px;
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

#translation-options-form input[type="checkbox"]:checked {
    background-color: transparent;
}

#translation-options-form input[type="checkbox"]:checked::before {
    content: '\2713';
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    color: rgb(11, 149, 9);
    font-size: 20px; /* Adjust the font size of the checkmark */
    font-weight: bold; 
}

#translation-options-form input[type="checkbox"] + label {
    color: white;
}



.speaker-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 5px;
    position: relative;
    bottom: -5px;
    background-color: transparent;
    
    /* Add any other styling properties you want for the speaker icon button */
  }

  #mic-button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    outline: none;
    background-image: url('mic.png');
    background-size: 80%; /* Adjust the background size as needed */
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    top: 15px; /* Adjust this value to move the button upwards */
}

#mic-button.active {
    background-image: url('mic-slash.png'); /* Change to the icon for when the mic is active */
}
