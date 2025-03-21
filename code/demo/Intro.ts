import { Player } from "../both/Player";
import { Dragon } from "../both/Dragon";
import { DragonFactory } from "../both/DragonFactory";
import { DragonSpecies } from "../both/DragonSpecies";
import { Food } from "../both/Food";
import { Weapon } from "../both/Weapon";

export class Intro {
    private player!: Player;
    private dragon!: Dragon;
    private gameText: HTMLElement;

    constructor() {
        this.startIntro();
    }

    //start intro woooh
    public startIntro(): void { 
        //players name first gotta be polite
        const playerName = prompt(`Before entering this world, you should probably have a name. What do you want to be called?`);
        if (playerName) {
            this.player = new Player(playerName, 100, 10);
            console.log(`Ah, right!` + this.player.getName() + `! I can already hear your enemies trembling at the sound of your name!`);
        }

        //now type of dragon baby
        const dragonChoice = prompt(`Now, what kind of dragon will you soar the skies with? Maybe a sharp class? Perhaps a wet tidal dragon? Or maybe a dangerous strike class? Just write the name of the class to pick your partner!`);
        if (dragonChoice == "sharp") {
            console.log(`A sharp class! A fine choice, but be careful with the spikes! If you want a sharp clas by your side... Then a Grim Gnasher is the dragon for you.`);
        } else if (dragonChoice == "tidal") {
            console.log(`A tidal class! A fine choice, even if a bit wet for my tasate. If you want a tidal class by your side... Then a Shockjaw is the dragon for you.`);
        } else if (dragonChoice == "strike") {
            console.log(`A strike class! A fine choice, one of my favourite if I may say so. If you want a strike class by your side... Then a Woolly Howl is the dragon for you.`);
        }
        const dragonName = prompt(`Look at that, a fitting dragon for this viking. What will you name your new friend?`);
        if (dragonName) {
            const species = DragonSpecies[dragonChoice as keyof typeof DragonSpecies];
            this.dragon = DragonFactory.createDragon(species, dragonName);
            console.log(`A fine name for a fine dragon!`);
        }

        //now we done
        this.finalizeIntro();
    }

    //gotta end the scene
    private finalizeIntro(): void {
        console.log(`Finally, you are all set. And so, let the journey begin!`);
        this.gameText = document.getElementById("gameText")!;
        this.gameText.innerHTML = `Welcome, ` + this.player.getName() + `! You're now ready to explore the world with your dragon, ` + this.dragon.getName() + `!`;
    }
}