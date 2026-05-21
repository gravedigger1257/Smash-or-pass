const images = [
    "IMG_2534.jpeg",
    "IMG_2549.png",
    "IMG_2550.jpeg",
    "IMG_2551.jpeg",
    "IMG_2552.jpeg",
    "IMG_2553.jpeg",
    "IMG_2554.jpeg",
    "IMG_2555.jpeg",
    "IMG_2556.jpeg",
    "IMG_2557.jpeg"
];

const personImage = document.getElementById("personImage");
const smashBtn = document.getElementById("smashBtn");
const passBtn = document.getElementById("passBtn");
const overlay = document.getElementById("overlay");
const overlayText = document.getElementById("overlayText");

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    personImage.src = images[randomIndex];
}

function showOverlay(color, text) {
    overlay.classList.remove("hidden");
    overlay.style.background = color;
    overlayText.textContent = text;

    setTimeout(() => {
        overlay.classList.add("hidden");
        randomImage();
    }, 1000);
}

smashBtn.addEventListener("click", () => {
    showOverlay("rgba(255, 65, 108, 0.85)", "SMASHED");
});

passBtn.addEventListener("click", () => {
    showOverlay("rgba(30, 144, 255, 0.85)", "PASSED");
});

// Start the game by loading the first image
randomImage();
