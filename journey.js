document.addEventListener("DOMContentLoaded", function () {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let mountains_front = document.getElementById("mountains_front");
    let text = document.getElementById("text");

    window.addEventListener("scroll", function () {
        let value = window.scrollY;

        // Move stars to the right
        stars.style.transform = `translateX(${value * 1.25}px)`;

        let opacityValue = Math.max(1 - value / 300, 0); // Moon fades as scroll increases
        moon.style.opacity = opacityValue;

        // Move mountains_behind to the left
        mountains_behind.style.transform = `translateX(${-value * 0.5}px)`;

        // Keep mountains_front fixed
        mountains_front.style.transform = `translateX(0)`;

        // Move text diagonally
        text.style.transform = `translateX(${-value * 1.25}px)`;

    });
});




