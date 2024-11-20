// Check for Web Speech API support
if (!('webkitSpeechRecognition' in window)) {
    alert('Web Speech API not supported in this browser.');
} else {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    const outputText = document.getElementById("output-text");
    const startRecordBtn = document.getElementById("start-record-btn");

    // Start recording on button click
    startRecordBtn.addEventListener("click", () => {
        recognition.start();
        outputText.textContent = "Listening...";
    });

    // Handle the result
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        outputText.textContent = "You said: " + transcript;
    };

    // Handle errors
    recognition.onerror = function(event) {
        outputText.textContent = "Error occurred: " + event.error;
    };
}
