function generateCharacterOrMessage() {
    const randomNumber = generateRandomNumber(1, 2);
    
    const profileDiv = document.getElementById("profile");
    if (randomNumber === 1) {
        generateCharacter(profileDiv);
    } else {
        profileDiv.innerHTML = "<br>You do not exist";
    }
}

function generateCharacter() {
    const categories = ["Strength", "Speed", "Durability", "IQ", "Combat Ability"];
    const profile = {};

    for (const category of categories) {
        const randomNumber = generateRandomNumber(1, 10);

        const word = mapNumberToWord(randomNumber);

        profile[category] = word;
    }

    const profileDiv = document.getElementById("profile");
    profileDiv.innerHTML = "<h2>Your Character Stats</h2>";

    for (const category in profile) {
        profileDiv.innerHTML += `<p><strong>${category}:</strong> <span>${profile[category]}</p></span><br>`;
    }

    const randomNumber = generateRandomNumber(1, 2);
    if (randomNumber === 1) {
        profileDiv.innerHTML += "<p>You are a Hero</p>";
    } else {
        profileDiv.innerHTML += "<p>You are a Villain</p>";
    }
}

function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function mapNumberToWord(number) {
    const numberWordMap = {
        1: "1: Low",
        2: "2: Below Average",
        3: "3: Average",
        4: "4: Above Average",
        5: "5: High",
        6: "6: Very High",
        7: "7: Excellent",
        8: "8: Exceptional",
        9: "9: Superhuman",
        10: "10: Godlike"
    };

    return numberWordMap[number] || "Unknown";
}
