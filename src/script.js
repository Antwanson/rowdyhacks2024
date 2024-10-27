// Select the car, flash overlay, and button elements
const car = document.querySelector(".delorean");
const flashOverlay = document.getElementById("flash");
const startAdventureButton = document.getElementById("startAdventure");

// Function to start the car animation
function startCarAnimation() {
    // Add the animation to the car
    car.style.animation = "driveAcross 2s linear forwards";

    // Listen for the end of the car's animation to trigger the flash
    car.addEventListener("animationend", triggerFlash);
}

function triggerFlash() {
    // Trigger first flash
    flashOverlay.classList.add("flash");

    // Remove and re-add flash class to create consecutive flashes
    setTimeout(() => {
        flashOverlay.classList.remove("flash");
    }, 300); // Duration of the flash off interval

    // Second flash
    setTimeout(() => {
        flashOverlay.classList.add("flash");
    }, 400); // Trigger second flash after 600ms

    setTimeout(() => {
        flashOverlay.classList.remove("flash");
    }, 500); // End second flash after 900ms

    // Third flash
    setTimeout(() => {
        flashOverlay.classList.add("flash");
    }, 600); // Trigger third flash after 1200ms

    setTimeout(() => {
        flashOverlay.classList.remove("flash");
		window.location.href = "landing.html";
    }, 700); // End third flash after 1500ms

	

    /* Optional: Remove the flash effect after it completes to reset
    setTimeout(() => {
        flashOverlay.classList.remove("flash");
		window.location.href = "landing.html";
    }, 1000);*/
}

// Trigger the car animation and flash on button click
startAdventureButton.addEventListener("click", startCarAnimation);