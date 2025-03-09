document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const responsiveNav = document.getElementById("responsiveNav");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector(".close");

    menuToggle.addEventListener("click", function () {
        // Toggle active class for smooth transition
        responsiveNav.classList.toggle("active");

        // Show/Hide Icons
        if (responsiveNav.classList.contains("active")) {
            hamburger.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            hamburger.style.display = "block";
            closeIcon.style.display = "none";
        }
    });
});


let bubbleInterval; // Store normal bubble interval
let explosionInterval; // Store explosion interval
let nextPageUrl = null; // Store the URL for redirection

// Function to create a single bubble
function createBubble() {
    const section = document.querySelector('.bubble-container');
    const bubble = document.createElement('span');

    let size = Math.random() * 60 + 10; // Random size (10px - 70px)
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(bubble);

    // Remove bubble after animation
    setTimeout(() => {
        bubble.remove();
    }, 4000); // Matches animation duration
}

// Start bubbles at normal rate
function startBubbles() {
    if (!bubbleInterval) {
        bubbleInterval = setInterval(createBubble, 800);
    }
}

// Stop normal bubble generation
function stopBubbles() {
    clearInterval(bubbleInterval);
    bubbleInterval = null;
}

// Trigger massive bubble explosion
function triggerExplosion() {
    stopBubbles(); // Stop normal bubbles

    // Create a burst of bubbles at a very fast rate
    explosionInterval = setInterval(createBubble, 2);

    // Wait for bubbles to fill the screen, then navigate
    setTimeout(() => {
        clearInterval(explosionInterval); // Stop explosion
        window.location.href = nextPageUrl; // Redirect
    }, 2000); // Delay for full coverage
}

// Handle navigation link clicks
function handleNavClick(event) {
    event.preventDefault(); // Prevent instant navigation
    nextPageUrl = event.target.href; // Store the clicked link URL
    triggerExplosion(); // Start the explosion effect
}

// Attach event listeners to all nav links
document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', handleNavClick);
});

document.querySelectorAll('.links').forEach(link => {
    link.addEventListener('click', handleNavClick);
});

document.querySelectorAll('.sat').forEach(link => {
    link.addEventListener('click', handleNavClick);
});


// Start normal bubbles initially
startBubbles();

// Optional: Add a fade-in effect on page load
document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";

    setTimeout(() => {
        content.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
    }, 500);
});



const crews = [
    {
        icon: "crew.png", 
        title: "Crew Members",
        subTitle: "Zoro , Sanji , Nami , Usoop , Robin , Chopper , Franky , Brook , Jinbei"
    },
    {
        icon: "fruit.jpg",
        title: "Devil Fruit",
        subTitle: "The Hito Hito no Mi, Model: Nika is a Mythical Zoan-type Devil Fruit in One Piece. It was originally known as the Gomu Gomu no Mi and gives the user a rubber-like body, allowing them to stretch and bounce."
    },
    {
        icon: "family.jpg",
        title: "Family Lineage",
        subTitle: "His father is Monkey D. Dragon, the Supreme Commander of the Revolutionary Army, making him one of the most wanted men in the world. His grandfather is Monkey D. Garp, a legendary Marine Vice Admiral, known as the Hero of the Marines."
    },
    {
        icon: "village.jpg",
        title: "Home Origin",
        subTitle: "Monkey D. Luffy hails from the Goa Kingdom in the East Blue, specifically from Foosha Village."
    }
];

const crewsContainer = document.getElementById("crews");

crews.forEach(crew => {
    const crewDiv = document.createElement("div");
    crewDiv.classList.add("crew");

    crewDiv.innerHTML = `
        <div class="icon">
            <img src="pics/${crew.icon}" alt="${crew.title}">
        </div>
        <h3>${crew.title}</h3>
        <p>${crew.subTitle}</p>
    `;

    crewsContainer.appendChild(crewDiv);
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Footer Loaded!");
});


