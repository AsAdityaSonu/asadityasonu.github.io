// script.js
const Text = ["Django Developer", "Graphic Designer", "baki pata nahi 🫠"];

const textElement = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;
let isErasing = false;

function typing() {
    const currentText = Text[textIndex];

    if (!isErasing) {
        textElement.textContent += currentText.charAt(charIndex);
        charIndex++;

        if (charIndex === currentText.length) {
            isErasing = true;
            setTimeout(typing, 1000); // display the text before erasing
        } else {
            setTimeout(typing, 50); // Typing speed
        }
    } else {
        textElement.textContent = currentText.substring(0, charIndex);

        if (charIndex === 0) {
            isErasing = false;
            textIndex = (textIndex + 1) % Text.length;
        } else {
            charIndex--;
        }
        setTimeout(typing, 50); // Erasing speed
    }
}

typing();
