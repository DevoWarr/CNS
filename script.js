let slide = document.querySelectorAll('.slide');
var current = 0;
var intervalId;

function cls() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.opacity = 0;
        slide[i].style.display = 'none';
    }
}

function next() {
    cls();
    if (current === slide.length - 1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].offsetHeight;
    slide[current].style.opacity = 1;
}

function prev() {
    cls();
    if (current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].offsetHeight;
    slide[current].style.opacity = 1;
}

function start() {
    cls();
    slide[current].style.display = 'block';
    slide[current].style.opacity = 1;
}

function startAutoSlide() {
    intervalId = setInterval(function () {
        next();
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

start();
startAutoSlide();
