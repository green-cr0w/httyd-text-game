import { Dragon } from './Dragon';
import { DragonSpecies } from './DragonSpecies';

export class DragonFactory {
    public static createDragon(species: DragonSpecies, name: string): Dragon {
        let dragon: Dragon;
        switch (species) {
            case DragonSpecies.CQ:
                dragon = new Dragon(name, 'A fire breathing dragon', 'Fire', 10, 5, 100, 100, 10, 10, 'Healthy');
                break;
            case DragonSpecies.CH:
                dragon = new Dragon(name, 'A frosty dragon', 'Ice', 5, 10, 100, 100, 10, 10, 'Healthy');
                break;
            case DragonSpecies.GG:
                dragon = new Dragon(name, 'A poisonous dragon', 'Poison', 7, 7, 100, 100, 10, 10, 'Healthy');
                break;
            case DragonSpecies.TY:
                dragon = new Dragon(name, 'A water breathing dragon', 'Water', 8, 8, 100, 100, 10, 10, 'Healthy');
                break;
            case DragonSpecies.WH:
                dragon = new Dragon(name, 'A frosty dragon', 'Ice', 5, 10, 100, 100, 10, 10, 'Healthy');
                break;
            case DragonSpecies.SH:
                dragon = new Dragon(name, 'An electric dragon', 'Electric', 9, 6, 100, 100, 10, 10, 'Healthy');
                break;
            case DragonSpecies.TC:
                dragon = new Dragon(name, 'A wind dragon', 'Wind', 6, 9, 100, 100, 10, 10, 'Healthy');
                break;
        }
        return dragon;
    }
        
}