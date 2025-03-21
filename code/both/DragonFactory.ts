import { DragonSpecies } from './DragonSpecies';
import { Dragon } from './Dragon';

export class DragonFactory {
    private static dragonData: Record<DragonSpecies, { description: string, type: string, attributes: [number, number, number, number, number, number, string, number, boolean, boolean] }> = {
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

    public static createDragon(species: DragonSpecies, name: string): Dragon {
        const data = this.dragonData[species];
        return new Dragon(name, data.description, data.type, ...data.attributes);
    }
}