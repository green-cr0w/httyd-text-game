import { Item } from './Item';

export class Food extends Item{
    private readonly healing: number //how much health it gives back

    constructor(name: string, description: string, isUsable: boolean, healing: number) {
        super(name, description, isUsable);
        this.healing = healing;
    }

    public getHealing(): number {
        return this.healing;
    }
}

