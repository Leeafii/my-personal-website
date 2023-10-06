function generateCharStats() {
    const categories=["Strength", "Speed", "Durability", "IQ", "Combat Ability"];
    const profile = {};

    for (const category of categories) {
        const randomNumber = generateRandomNumber(1, 10);
}

function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}