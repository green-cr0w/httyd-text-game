import { Player } from "../both/Player";
import { Dragon } from "../both/Dragon";
import { DragonFactory } from "../both/DragonFactory";
import { DragonSpecies } from "../both/DragonSpecies";
import { getUserInput, printToScreen } from "../both/CoreFunctions";

export class Intro {
    private player!: Player;
    private dragon!: Dragon;

    constructor() {
        this.startIntro();
    }

    // Start the intro sequence
    public async startIntro(): Promise<void> {
        printToScreen("Before entering this world, you should probably have a name. What do you want to be called?");
        let playerName = await getUserInput();

        while (!playerName) {
            printToScreen("Hey, you need a name!");
            playerName = await getUserInput();
        }

        printToScreen(`Ah, that's a fine name. Are you sure you want to be called ${playerName}? (yes/no)`);
        let confirmation = await getUserInput();

        if (confirmation.toLowerCase() === "yes") {
            this.player = new Player(playerName, 100, 10);
            printToScreen(`Ah, right! ${this.player.getName()}! I can already hear your enemies trembling at the sound of your name!`);
        } else {
            return this.startIntro(); // Restart the naming process if they say no
        }

        await this.askDragonChoice();
    }

    // Ask the player what kind of dragon they want
    private async askDragonChoice(): Promise<void> {
        printToScreen("Now, what kind of dragon will you soar the skies with? (sharp/tidal/strike)");
        let dragonChoice = await getUserInput();

        const dragonMessages: { [key: string]: string } = {
            sharp: "A sharp class! A fine choice, but be careful with the spikes! If you want a sharp class by your side... Then a Grim Gnasher is the dragon for you.",
            tidal: "A tidal class! A fine choice, even if a bit wet for my taste. If you want a tidal class by your side... Then a Shockjaw is the dragon for you.",
            strike: "A strike class! A fine choice, one of my favourites if I may say so. If you want a strike class by your side... Then a Woolly Howl is the dragon for you."
        };

        while (!dragonMessages[dragonChoice.toLowerCase()]) {
            printToScreen("I'm sorry, I don't know that class... Try sharp, tidal, or strike.");
            dragonChoice = await getUserInput();
        }

        printToScreen(dragonMessages[dragonChoice.toLowerCase()]);
        await this.askDragonName(dragonChoice.toLowerCase());
    }

    // Ask the player for their dragon's name
    private async askDragonName(dragonClass: string): Promise<void> {
        printToScreen("Look at that, a fitting dragon for this viking. What will you name your new friend?");
        let dragonName = await getUserInput();

        while (!dragonName) {
            printToScreen("You gotta name your dragon!");
            dragonName = await getUserInput();
        }

        const species = DragonSpecies[dragonClass.toUpperCase() as keyof typeof DragonSpecies];
        this.dragon = DragonFactory.createDragon(species, dragonName);
        printToScreen(`A fine name for a fine dragon!`);

        this.finalizeIntro();
    }

    // Finish the intro
    private finalizeIntro(): void {
        printToScreen(`Finally, you are all set. And so, let the journey begin!`);
        printToScreen(`Welcome, ${this.player.getName()}! You're now ready to explore the world with your dragon, ${this.dragon.getName()}!`);
    }
}
