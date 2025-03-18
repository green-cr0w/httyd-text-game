import { Food } from './Food';
export class Dragon {
    private readonly name: string; //player chooses it when creating the dragon
    private readonly description: string; //default, given to player when choosing
    private readonly class: string; //dragon class
    private readonly firePower: number; //power of shots
    private readonly physicalPower: number; //power of physical attacks
    private health: number; //current health dragon
    private readonly maxHealth: number; //max health dragon
    private shots: number; //current shots
    private readonly maxShots: number; //max shots
    private state: string; //current state of dragon, can change with hp
    private readonly recharge: number; //how long it takes for all shots to recharge
    private readonly tooBig: boolean; //is dragon  too big
    private readonly eelEater: boolean; //is dragon an eel eater
    
    constructor(name: string, description: string, dragonClass: string, firePower: number, physicalPower: number, health: number, maxHealth: number, shots: number, maxShots: number, state: string, recharge: number, tooBig: boolean, eelEater: boolean) {
        this.name = name;
        this.description = description;
        this.class = dragonClass;
        this.firePower = firePower;
        this.physicalPower = physicalPower;
        this.health = health;
        this.maxHealth = maxHealth;
        this.shots = shots;
        this.maxShots = maxShots;
        this.state = state;
        this.recharge = recharge;
        this.tooBig = tooBig;
        this.eelEater = eelEater;
    }

    //update the state of the dragon
    public updateState(): void {
        let checkup: number = this.health/this.maxHealth;
        if (checkup == 1) {
            this.state = this.getName() + 'looks healthy and ready to fight!';
        } else if (checkup >= 0.5) {
            this.state = this.getName() + 'looks a bit tired, but still ready to fight!';
        }
        else if (checkup >= 0.25) {
            this.state = this.getName() + 'looks exhausted, maybe try to find some food and let it rest.';
        }
    }

    //KILL IT WITH FIRE
    public fireattack(): void {
        if (this.shots > 0) {
            this.shots--;
            console.log(this.getName() + ' attacks with fire!');
        } else {
            console.log(this.getName() + ' is out of shots!');
        }
    }

    //was that the bite of 87
    public physicalattack(): void {
        console.log(this.getName() + ' attacks with a physical attack!');
    }

    //ouch
    public takeDamage(damage: number): void {
        this.health -= damage;
        console.log(this.getName() + ' took ' + damage + ' damage!');
        if (this.health <= 0) {
            this.health = 0;
            console.log(this.getName() + ' has been defeated!');
        }
    }

    //recover fireshots
    public recoverShots(): void {
        this.shots = this.maxShots;
        console.log(this.getName() + ' has recovered its shots!');
    }

    //i need a healer
    public recoverHealth(): void {
        this.health = this.maxHealth;
        console.log(this.getName() + ' has recovered its health!');
    }

    //feeding dragon
    public feedDragon(food: Food): void {
        if (food.getName() == 'Eel') {
            if (this.eelEater == false) {
                console.log(this.getName + ' does not eat eels!');
            }
            else {
                this.health += food.getHealing();
                console.log(this.getName() + ' has eaten eel and recovered ' + food.getHealing() + ' health!');
            }
        }
        else {
            this.health += food.getHealing();
            console.log(this.getName() + ' has eaten fish and recovered ' + food.getHealing() + ' health!');
        }
        }

    // #region Getters and Setters
    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getClass(): string {
        return this.class;
    }

    public getFirePower(): number {
        return this.firePower;
    }

    public getPhysicalPower(): number {
        return this.physicalPower;
    }

    public getHealth(): number {
        return this.health;
    }

    public getMaxHealth(): number {
        return this.maxHealth;
    }

    public getShots(): number {
        return this.shots;
    }

    public getMaxShots(): number {
        return this.maxShots;
    }

    public getState(): string {
        return this.state;
    }

    public getRecharge(): number {
        return this.recharge;
    }

    public getTooBig(): boolean {
        return this.tooBig;
    }

    public getEelEater(): boolean {
        return this.eelEater;
    }

    public setHealth(health: number): void {
        this.health = health;
    }

    public setShots(shots: number): void {
        this.shots = shots;
    }

    public setState(state: string): void {
        this.state = state;
    }
    // #endregion

}