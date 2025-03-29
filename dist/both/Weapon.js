import { Item } from './Item';
export class Weapon extends Item {
    constructor(name, description, isUsable, damage) {
        super(name, description, isUsable);
        this.damage = damage;
    }
    getDamage() {
        return this.damage;
    }
}
