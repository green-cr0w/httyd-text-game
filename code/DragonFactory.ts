import { DragonSpecies } from './DragonSpecies';
import { Dragon } from './Dragon';

export class DragonFactory {
    public static createDragon(species: DragonSpecies, name: string): Dragon {
       
        var cqD: string = `This large boulder class dragon has thick skin and an even thicker skull. While catastrophic quakens might not be the most social of dragons and look quite intimidating, once you get to know them these round fellows are willing to fly with a rider—as long as there are boulders invoved, of course.`;
        var chD: string = `Did you see that? There it is again! No, it's not a trick of the light, it is a change wing! While a bit shy, and with acid refluxes that could send a viking straight to Valhalla, there are many reasons as to why join forces with this mystery class over her—hey, where did it go?`;
        var ggD: string = `Don't be fooled by its size, despite being smaller than most, the grim gnasher is a very capable dragon! This sharp class preys on others with the help of their team, so you can bet it will stay by your side through any and every fight, using its brains and teeth to protect its own.`;
        var tyD: string = `Gigantic is not enough to describe this beast of a stoker class. Not only do typhoomerangs have wuite the strange diet, eating eels very happily in their free time, their fire comes out as a deadly fire-typhoon. With an ally like this, who needs weapons?`;
        var whD: string = `Right out of the coldest and most desolate mountains of the archipelago, the woolly howl is one of the fluffiest dragons out there! With their thick fur coat, this sharp class prefers to stay hidden in between the clouds or the snow, and with their incredible speed and accuracy, no target is safe from their icy breath!`;
        var shD: string = `You won't find a faster dragon than the shockjaw—at least not underwater! With shots that will shock you (pun intended) you'll be able to not only explore the skies but also the seas with relative ease regardless of how many enemies you and this tidal clase face together.`;
        var tcD: string = `Cute, feisty, and very energetic, this trajer class dragon will steal your heart rather quickly. But don't let its adorable face trick you, when it comes to fighting, thunderclaws are not afraid to face their opponents and make sure they never come back. Plus, you won't eveer lose your sheep again.`;

        let dragon: Dragon;
        switch (species) {
            case DragonSpecies.CQ:
                dragon = new Dragon(name, cqD, 'Boulder', 10, 20, 100, 100, 6, 6, 'Healthy', 3, false, false);
                break;
            case DragonSpecies.CH:
                dragon = new Dragon(name, chD, 'Mystery', 12, 9, 100, 100, 10, 10, 'Healthy', 3, false, false);
                break;
            case DragonSpecies.GG:
                dragon = new Dragon(name, ggD, 'Sharp', 9, 12, 100, 100, 5, 5, 'Healthy', 24, false, false);
                break;
            case DragonSpecies.TY:
                dragon = new Dragon(name, tyD, 'Stoker', 17, 14, 100, 100, 10, 10, 'Healthy', 3, true, true);
                break;
            case DragonSpecies.WH:
                dragon = new Dragon(name, whD, 'Strike', 16, 12, 100, 100, 6, 6, 'Healthy', 3, false, false);
                break;
            case DragonSpecies.SH:
                dragon = new Dragon(name, shD, 'Tidal', 14, 10, 100, 100, 9, 9, 'Healthy', 3, false, false);
                break;
            case DragonSpecies.TC:
                dragon = new Dragon(name, tcD, 'Tracker', 12, 14, 100, 100, 6, 6, 'Healthy', 3, false, false);
                break;
        }
        return dragon;
    }
        
}