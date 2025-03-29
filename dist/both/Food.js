import { Item } from './Item';
export class Food extends Item {
    constructor(name, description, isUsable, healing) {
        super(name, description, isUsable);
        this.healing = healing;
    }
    getHealing() {
        return this.healing;
    }
}
