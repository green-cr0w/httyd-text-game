import { Item } from './Item';

export class Weapon extends Item {
    private readonly damage: number; //how much damage it does

    constructor(name: string, description: string, isUsable: boolean, damage: number) {
        super(name, description, isUsable);
        this.damage = damage;
    }

    public getDamage(): number {
        return this.damage;
    }
}