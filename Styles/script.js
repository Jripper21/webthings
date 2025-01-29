// Select all clickable images and videos
const mediaElements = document.querySelectorAll(".clickable");

// Function to toggle fullscreen mode
function toggleFullScreen(element) {
    if (!document.fullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Add click event listener to each image and video
mediaElements.forEach((element) => {
    element.addEventListener("click", () => toggleFullScreen(element));
});
