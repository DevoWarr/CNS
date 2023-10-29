const images = [
    "url('images/1.jpg')",
    "url('images/2.jpg')",
    "url('images/3.jpg')"
];

let currentImageIndex = 0;

function changeBackground() {
    document.querySelector(".slide-background").style.backgroundImage = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 4000);