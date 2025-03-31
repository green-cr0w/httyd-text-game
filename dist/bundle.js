/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./code/both/Player.ts
class Player {
    constructor(name, maxHealth, strength) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.strength = strength;
    }
    getName() {
        return this.name;
    }
    getMaxHealth() {
        return this.maxHealth;
    }
    getHealth() {
        return this.health;
    }
    getStrength() {
        return this.strength;
    }
    setHealth(health) {
        this.health = health;
    }
}

;// ./code/both/DragonSpecies.ts
var DragonSpecies;
(function (DragonSpecies) {
    DragonSpecies["CQ"] = "Catastrophic Quaken";
    DragonSpecies["CH"] = "Changewing";
    DragonSpecies["GG"] = "Grim Gnasher";
    DragonSpecies["TY"] = "Typhoomerang";
    DragonSpecies["WH"] = "Woolly Howl";
    DragonSpecies["SH"] = "Shockjaw";
    DragonSpecies["TC"] = "Thunderclaw";
})(DragonSpecies || (DragonSpecies = {}));

;// ./code/both/Dragon.ts
class Dragon {
    constructor(name, dragonClass, description, firePower, physicalPower, health, maxHealth, shots, maxShots, state, recharge, tooBig, eelEater) {
        this.name = name;
        this.description = description;
        this.class = dragonClass;
        this.firePower = firePower;
        this.physicalPower = physicalPower;
        this.health = health;
        this.maxHealth = maxHealth;
        this.shots = shots;
        this.maxShots = maxShots;
        this.state = state;
        this.recharge = recharge;
        this.tooBig = tooBig;
        this.eelEater = eelEater;
    }
    updateState() {
        let checkup = this.getHealth() / this.getMaxHealth();
        if (checkup == 1) {
            this.setState(this.getName() + `nuzzles your hand. Your dragon looks healthy and ready to explore!`);
        }
        else if (checkup >= 0.5) {
            this.setState(this.getName() + `looks up at you with a bit of a tired expression, but still willing to keep going.`);
        }
        else if (checkup >= 0.25) {
            this.setState(this.getName() + `looks exhausted, maybe you should try to find some food and rest.`);
        }
    }
    fireattack() {
        let actualShots = this.getShots();
        if (actualShots > 0) {
            this.setShots(actualShots - 1);
            console.log(this.getName() + ` attacks with fire!`);
        }
        else {
            console.log(this.getName() + ` is out of shots!`);
        }
    }
    physicalattack() {
        console.log(this.getName() + ` attacks with a physical attack!`);
    }
    recoverShots() {
        this.setShots(this.getMaxShots());
        console.log(this.getName() + ` has recovered its shots!`);
    }
    feedDragon(food) {
        if (food.getName() == `Eel`) {
            if (this.getEelEater() == false) {
                console.log(this.getName + `'s eyes widen and give you an incredulous look before taking a few steps back. Right, dragons and their fear of eels...`);
            }
            else {
                console.log(this.getName() + ` looks at the eel in delight and immediatly gulps it down. It seems like your dragon really enjoyed that!`);
            }
        }
        else {
            console.log(this.getName() + ` looks at the ` + food.getName() + ` and eats it happily.`);
        }
        this.setHealth(food.getHealing());
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getClass() {
        return this.class;
    }
    getFirePower() {
        return this.firePower;
    }
    getPhysicalPower() {
        return this.physicalPower;
    }
    getHealth() {
        return this.health;
    }
    getMaxHealth() {
        return this.maxHealth;
    }
    getShots() {
        return this.shots;
    }
    getMaxShots() {
        return this.maxShots;
    }
    getState() {
        return this.state;
    }
    getRecharge() {
        return this.recharge;
    }
    getTooBig() {
        return this.tooBig;
    }
    getEelEater() {
        return this.eelEater;
    }
    setHealth(healthAdded) {
        var actualHp = this.getHealth();
        var maxHp = this.getMaxHealth();
        var healed = healthAdded;
        if (healthAdded < 0) {
            this.health = Math.max(actualHp + healthAdded, 0);
            if (this.getHealth() == 0) {
                console.log(this.getName() + ` has been struck down!`);
            }
            else {
                console.log(this.getName() + ` has taken ` + healed * -1 + ` points of damage!`);
            }
        }
        else {
            this.health = Math.min(actualHp + healthAdded, maxHp);
            if (actualHp + healthAdded > maxHp) {
                healed = maxHp - actualHp;
            }
            console.log(this.getName() + ` has recovered ` + healed + ` points of its health!`);
        }
    }
    setShots(shots) {
        this.shots = shots;
    }
    setState(state) {
        this.state = state;
    }
}

;// ./code/both/DragonFactory.ts


class DragonFactory {
    static createDragon(species, name) {
        const data = this.dragonData[species];
        return new Dragon(name, data.description, data.type, ...data.attributes);
    }
}
DragonFactory.dragonData = {
    [DragonSpecies.CQ]: {
        description: `This large boulder class dragon has thick skin and an even thicker skull. While catastrophic quakens might not be the most social of dragons and look quite intimidating, once you get to know them these round fellows are willing to fly with a rider—as long as there are boulders invoved, of course.`,
        type: 'Boulder',
        attributes: [10, 20, 100, 100, 6, 6, 'Healthy', 3, false, false]
    },
    [DragonSpecies.CH]: {
        description: `Did you see that? There it is again! No, it's not a trick of the light, it is a change wing! While a bit shy, and with acid refluxes that could send a viking straight to Valhalla, there are many reasons as to why join forces with this mystery class over her—hey, where did it go?`,
        type: 'Mystery',
        attributes: [12, 9, 100, 100, 10, 10, 'Healthy', 3, false, false]
    },
    [DragonSpecies.GG]: {
        description: `Don't be fooled by its size, despite being smaller than most, the grim gnasher is a very capable dragon! This sharp class preys on others with the help of their team, so you can bet it will stay by your side through any and every fight, using its brains and teeth to protect its own.`,
        type: 'Sharp',
        attributes: [9, 12, 100, 100, 5, 5, 'Healthy', 24, false, false]
    },
    [DragonSpecies.TY]: {
        description: `Gigantic is not enough to describe this beast of a stoker class. Not only do typhoomerangs have wuite the strange diet, eating eels very happily in their free time, their fire comes out as a deadly fire-typhoon. With an ally like this, who needs weapons?`,
        type: 'Stoker',
        attributes: [17, 14, 100, 100, 10, 10, 'Healthy', 3, true, true]
    },
    [DragonSpecies.WH]: {
        description: `Right out of the coldest and most desolate mountains of the archipelago, the woolly howl is one of the fluffiest dragons out there! With their thick fur coat, this sharp class prefers to stay hidden in between the clouds or the snow, and with their incredible speed and accuracy, no target is safe from their icy breath!`,
        type: 'Strike',
        attributes: [16, 12, 100, 100, 6, 6, 'Healthy', 3, false, false]
    },
    [DragonSpecies.SH]: {
        description: `You won't find a faster dragon than the shockjaw—at least not underwater! With shots that will shock you (pun intended) you'll be able to not only explore the skies but also the seas with relative ease regardless of how many enemies you and this tidal clase face together.`,
        type: 'Tidal',
        attributes: [14, 10, 100, 100, 9, 9, 'Healthy', 3, false, false]
    },
    [DragonSpecies.TC]: {
        description: `Cute, feisty, and very energetic, this traker class dragon will steal your heart rather quickly. But don't let its adorable face trick you, when it comes to fighting, thunderclaws are not afraid to face their opponents and make sure they never come back. Plus, you won't eveer lose your sheep again.`,
        type: 'Tracker',
        attributes: [12, 14, 100, 100, 6, 6, 'Healthy', 3, false, false]
    }
};

;// ./code/both/CoreFunctions.ts
function getUserInput() {
    return new Promise((resolve) => {
        const inputField = document.getElementById("userInput");
        const handleInput = () => {
            const userInput = inputField.value.trim();
            if (userInput) {
                inputField.value = "";
                printToScreen(`> ${userInput}`);
                resolve(userInput);
                inputField.removeEventListener("keydown", onKeydown);
            }
        };
        const onKeydown = (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                handleInput();
            }
        };
        inputField.addEventListener("keydown", onKeydown);
        inputField.focus();
    });
}
function printToScreen(message) {
    const consoleText = document.getElementById("console-text");
    if (!consoleText) {
        console.error("Console text area not found! Make sure #console-text exists in the HTML.");
        return;
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    consoleText.appendChild(paragraph);
    consoleText.scrollTop = consoleText.scrollHeight;
}

;// ./code/demo/Intro.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Intro {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.startIntro();
        });
    }
    startIntro() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Intro started!");
            printToScreen("Before entering this world, you should probably have a name. What do you want to be called?");
            let playerName = yield getUserInput();
            while (!playerName) {
                printToScreen("Hey, you need a name!");
                playerName = yield getUserInput();
            }
            printToScreen(`Ah, that's a fine name. Are you sure you want to be called ${playerName}? (yes/no)`);
            let confirmation = yield getUserInput();
            while (confirmation.toLowerCase() !== "yes" && confirmation.toLowerCase() !== "no") {
                printToScreen("Please type 'yes' or 'no'.");
                confirmation = yield getUserInput();
            }
            if (confirmation.toLowerCase() === "yes") {
                this.player = new Player(playerName, 100, 10);
                printToScreen(`Ah, right! ${this.player.getName()}! I can already hear your enemies trembling at the sound of your name!`);
            }
            else {
                return this.startIntro();
            }
            yield this.askDragonChoice();
        });
    }
    askDragonChoice() {
        return __awaiter(this, void 0, void 0, function* () {
            printToScreen("Now, what kind of dragon will you soar the skies with? (sharp/tidal/strike)");
            let dragonChoice = yield getUserInput();
            const dragonMessages = {
                sharp: "A sharp class! A fine choice, but be careful with the spikes! If you want a sharp class by your side... Then a Grim Gnasher is the dragon for you.",
                tidal: "A tidal class! A fine choice, even if a bit wet for my taste. If you want a tidal class by your side... Then a Shockjaw is the dragon for you.",
                strike: "A strike class! A fine choice, one of my favourites if I may say so. If you want a strike class by your side... Then a Woolly Howl is the dragon for you."
            };
            while (!dragonMessages[dragonChoice.toLowerCase()]) {
                printToScreen("I'm sorry, I don't know that class... Try sharp, tidal, or strike.");
                dragonChoice = yield getUserInput();
            }
            printToScreen(dragonMessages[dragonChoice.toLowerCase()]);
            yield this.askDragonName(dragonChoice.toLowerCase());
        });
    }
    askDragonName(dragonClass) {
        return __awaiter(this, void 0, void 0, function* () {
            printToScreen("Look at that, a fitting dragon for this viking. What will you name your new friend?");
            let dragonName = yield getUserInput();
            while (!dragonName) {
                printToScreen("You gotta name your dragon!");
                dragonName = yield getUserInput();
            }
            const species = DragonSpecies[dragonClass.toUpperCase()];
            this.dragon = DragonFactory.createDragon(species, dragonName);
            printToScreen(`A fine name for a fine dragon!`);
            this.finalizeIntro();
        });
    }
    finalizeIntro() {
        printToScreen(`Finally, you are all set. And so, let the journey begin!`);
        printToScreen(`Welcome, ${this.player.getName()}! You're now ready to explore the world with your dragon, ${this.dragon.getName()}!`);
    }
}

;// ./code/demo/Demo.ts

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");
    const intro = new Intro();
    intro.startIntro();
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map