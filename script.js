const images = [
    "images/placeholder1.png",
    "images/placeholder2.png",
    "images/placeholder3.png"
];

let currentIndex = 0;

const personImage = document.getElementById("personImage");
const smashBtn = document.getElementById("smashBtn");
const passBtn = document.getElementById("passBtn");
const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlayText");

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    personImage.src = images[currentIndex];
}

function showOverlay(color, text) {
    overlay.classList.remove("hidden");
    overlay.style.background = color;
    overlayText.textContent = text;

    setTimeout(() => {
        overlay.classList.add("hidden");
        nextImage();
    }, 1000);
}

smashBtn.addEventListener("click", () => {
    showOverlay("red", "SMASHED");
});

passBtn.addEventListener("click", () => {
    showOverlay("dodgerblue", "PASS");
});
