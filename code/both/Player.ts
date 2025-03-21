export class Player{
    private readonly name: string; //player chooses it before choosing dragon
    private readonly maxHealth: number; //max health of player
    private health: number; //current health of player
    private readonly strength: number; //strength of player

    constructor(name: string, maxHealth: number, strength: number) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.strength = strength;
    }

    // #region Getters and Setters
    public getName(): string {
        return this.name;
    }

    public getMaxHealth(): number {
        return this.maxHealth;
    }

    public getHealth(): number {
        return this.health;
    }

    public getStrength(): number {
        return this.strength;
    }

    public setHealth(health: number): void {
        this.health = health;
    }
    // #endregion
}