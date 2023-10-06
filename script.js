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
        profileDiv.innerHTML += `<p><strong>${category}:</strong> <span>${profile[category]}</p></span>`;
    }
}

function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function mapNumberToWord(number) {
    const numberWordMap = {
        1: "Low",
        2: "Below Average",
        3: "Average",
        4: "Above Average",
        5: "High",
        6: "Very High",
        7: "Excellent",
        8: "Exceptional",
        9: "Superhuman",
        10: "Godlike"
    };

    return numberWordMap[number] || "Unknown";
}