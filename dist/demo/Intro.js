var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Player } from "../both/Player";
import { DragonFactory } from "../both/DragonFactory";
import { DragonSpecies } from "../both/DragonSpecies";
import { getUserInput, printToScreen } from "../both/CoreFunctions";
export class Intro {
    constructor() {
        this.startIntro();
    }
    // Start the intro sequence
    startIntro() {
        return __awaiter(this, void 0, void 0, function* () {
            printToScreen("Before entering this world, you should probably have a name. What do you want to be called?");
            let playerName = yield getUserInput();
            while (!playerName) {
                printToScreen("Hey, you need a name!");
                playerName = yield getUserInput();
            }
            printToScreen(`Ah, that's a fine name. Are you sure you want to be called ${playerName}? (yes/no)`);
            let confirmation = yield getUserInput();
            if (confirmation.toLowerCase() === "yes") {
                this.player = new Player(playerName, 100, 10);
                printToScreen(`Ah, right! ${this.player.getName()}! I can already hear your enemies trembling at the sound of your name!`);
            }
            else {
                return this.startIntro(); // Restart the naming process if they say no
            }
            yield this.askDragonChoice();
        });
    }
    // Ask the player what kind of dragon they want
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
    // Ask the player for their dragon's name
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
    // Finish the intro
    finalizeIntro() {
        printToScreen(`Finally, you are all set. And so, let the journey begin!`);
        printToScreen(`Welcome, ${this.player.getName()}! You're now ready to explore the world with your dragon, ${this.dragon.getName()}!`);
    }
}
