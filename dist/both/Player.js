export class Player {
    constructor(name, maxHealth, strength) {
        this.name = name;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.strength = strength;
    }
    // #region Getters and Setters
    getName() {
        return this.name;
    }
    getMaxHealth() {
        return this.maxHealth;
    }
    getHealth() {
        return this.health;
    }
    getStrength() {
        return this.strength;
    }
    setHealth(health) {
        this.health = health;
    }
}
