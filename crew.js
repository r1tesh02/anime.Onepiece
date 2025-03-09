const data = [
    {
        image: "pics/zoro.jpg",
        miniImage: "pics/zorobounty.jpg",
        title: "Pirate Hunter (Bounty : 1,110,000,000)",
        subTitle: "The swordsman of the Straw Hat Pirates, known as the Pirate Hunter. He wields three swords and aims to become the world's strongest swordsman.",
        head: "Vice Captain | Swordsman",
        name: "RONOROA ZORO"
    },
    {
        image: "pics/sanji.jpeg",
        miniImage: "pics/sanjibounty.jpg",
        title: "Black Leg (Bounty: 1,032,000,000)",
        subTitle: "The crew’s cook and a master of martial arts using his legs. He dreams of finding the All Blue, a legendary sea with fish from all over the world.",
        head: "Left Hand | Cook",
        name: "Vinsmoke Sanji"
    },
    {
        image: "pics/nami.jpg",
        miniImage: "pics/namibounty.jpg",
        title: "Cat Burglar (Bounty: 366,000,000)",
        subTitle: "The navigator of the Straw Hat Pirates. A skilled cartographer and thief, she dreams of mapping the entire world.",
        head: "Navigator",
        name: "Nami"
    },
    {
        image: "pics/nicorobin.jpeg",
        miniImage: "pics/robinbounty.jpg",
        title: "Demon Child (Bounty: 930,000,000)",
        subTitle: "The archaeologist of the crew and the only survivor of Ohara. She seeks to uncover the true history of the world through the Poneglyphs.",
        head: "Archaeologist",
        name: "Nico Robin"
    },
    {
        image: "pics/chopper.jpg",
        miniImage: "pics/chopperbounty.jpg",
        title: "Cotton Candy Lover (Bounty: 1000)",
        subTitle: "The ship’s doctor, a reindeer who ate the Human-Human Fruit. He can transform into different forms and is highly intelligent.",
        head: "Doctor",
        name: "Tony Tony Chopper"
    },
    {
        image: "pics/usopp.jpg",
        miniImage: "pics/usoppbounty.jpg",
        title: "Sniper King (Bounty: 500,000,000)",
        subTitle: "The sniper of the crew, known for his trickery and sharpshooting. He dreams of becoming a brave warrior of the sea like his father.",
        head: "Sniper",
        name: "God Usopp"
    },
    {
        image: "pics/brook.jpg",
        miniImage: "pics/brookbounty.jpg",
        title: "Soul King (Bounty: 383,000,000)",
        subTitle: "A living skeleton and the Straw Hat Pirates’ musician. Revived by the Revive-Revive Fruit, he wields a cane sword and uses music to aid his crew.",
        head: "Musician",
        name: "Brook"
    },
    {
        image: "pics/franky.jpg",
        miniImage: "pics/frankybounty.jpg",
        title: "Cyborg Franky (Bounty: 394,000,000)",
        subTitle: "A brilliant shipwright and cyborg with a love for cola-powered inventions. He built the Straw Hats’ ship, the Thousand Sunny.",
        head: "Shipwright",
        name: "Franky"
    },
    {
        image: "pics/jinbei.jpg",
        miniImage: "pics/jinbeibounty.jpg",
        title: "Knight of the Sea (Bounty: 1,100,000,000)",
        subTitle: "A former Warlord and expert Fish-Man Karate master. He joins the crew as their helmsman, bringing wisdom and strength.",
        head: "Helmsman",
        name: "Jinbei"
    }
];

// Dynamically populate the villages
const hoverColors = [
    "green", "#f39c12", "rgb(245, 87, 30)", "rgb(201, 94, 201)", "rgb(184, 127, 136)",
    "rgb(63, 138, 63)", "rgb(94, 91, 91)", " rgb(174, 45, 45)", "rgb(38, 38, 171)"
];

// Dynamically populate the villages
const container = document.getElementById("destinations-container");

data.forEach((destination, index) => {
    const villageElement = document.createElement("div");
    villageElement.classList.add("destination");

    // Assign a unique hover color
    const hoverColor = hoverColors[index % hoverColors.length];

    villageElement.innerHTML = `
        <img src="${destination.image}" alt="Main Image" class="main-image">
        <div class="mini-image">
            <img src="${destination.miniImage}" alt="Mini Image">
        </div>
        <h3>${destination.title}</h3>
        <p>${destination.subTitle}</p>
        <div class="info">
            <h5>${destination.head}</h5>
            <div>${destination.name}</div>
        </div>
    `;

    // Apply inline CSS for hover effect
    villageElement.style.setProperty("--hover-color", hoverColor);

    container.appendChild(villageElement);
});


const hoverColoring = [
    "rgb(176, 154, 151)", "rgb(192, 54, 36)", "rgb(107, 190, 184)",
    ];

const dates = [
    {
        image: "pics/luffy2.jpg",
        title: "Warrior of Liberation",
        subTitle: "After awakening his Devil Fruit, Luffy embodies the mythical Sun God Nika, fighting for freedom with boundless energy and cartoonish abilities.",
        head: "The Sun God Nika",
        name: "Monkey.D.Luffy"
    },
    {
        image: "pics/uffy1.jpg",
        title: "Straw Hat Luffy (Bounty: 3,000,000,000 )",
        subTitle: "The cheerful captain of the Straw Hats. With the power of the Gum-Gum Fruit, he dreams of becoming the Pirate King.",
        head: "Captain ",
        name: "Monkey.D.Luffy"
    },
    {
        image: "pics/luffy3.jpg",
        title: "Yonko of the Sea",
        subTitle: "Recognized as one of the Four Emperors, Luffy has gained global influence, proving himself as a top pirate with a crew and fleet under his banner.",
        head: "Emperor",
        name: "Monkey.D.Luffy"
    }
];

const contain = document.getElementById("spots-container");

dates.forEach((spot, index) => {
    const spotElement = document.createElement("div");
    spotElement.classList.add("spot");

    // Assign a unique hover color
    const hoverColor = hoverColoring[index % hoverColoring.length];

    // ✅ Use template literals correctly
    spotElement.innerHTML = `
        <img src="${spot.image}" alt="Main Image" class="main-image">
        <div class="mini-image">
            <img src="${spot.miniImage ? spot.miniImage : ''}" alt="Mini Image">
        </div>
        <h3>${spot.title}</h3>
        <p>${spot.subTitle}</p>
        <div class="info">
            <h5>${spot.head}</h5>
            <div>${spot.name}</div>
        </div>
    `;

    // Apply inline CSS for hover effect
    spotElement.style.setProperty("--hover-color", hoverColor);

    contain.appendChild(spotElement);
});


