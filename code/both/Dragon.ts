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
        let checkup: number = this.getHealth()/this.getMaxHealth();
        if (checkup == 1) {
            this.setState(this.getName() + `nuzzles your hand. Your dragon looks healthy and ready to explore!`);
        } else if (checkup >= 0.5) {
            this.setState(this.getName() + `looks up at you with a bit of a tired expression, but still willing to keep going.`);
        }
        else if (checkup >= 0.25) {
            this.setState(this.getName() + `looks exhausted, maybe you should try to find some food and rest.`);
        }
    }

    //KILL IT WITH FIRE
    public fireattack(): void {
        let actualShots: number = this.getShots();
        if (actualShots > 0) {
            this.setShots(actualShots - 1);
            console.log(this.getName() + ` attacks with fire!`);
        } else {
            console.log(this.getName() + ` is out of shots!`);
        }
    }

    //was that the bite of 87
    public physicalattack(): void {
        console.log(this.getName() + ` attacks with a physical attack!`);
    }

    //recover fireshots
    public recoverShots(): void {
        this.setShots(this.getMaxShots());
        console.log(this.getName() + ` has recovered its shots!`);
    }

    //yummy time
    public feedDragon(food: Food): void {
        if (food.getName() == `Eel`) {
            if (this.getEelEater() == false) {
                console.log(this.getName + `'s eyes widen and give you an incredulous look before taking a few steps back. Right, dragons and their fear of eels...`);
            }
            else {
                console.log(this.getName() + ` looks at the eel in delight and immediatly gulps it down. It seems like your dragon really enjoyed that!`);
            }
        }
        else {
            console.log(this.getName() + ` looks at the ` + food.getName() + ` and eats it happily.`);            
        }
        this.setHealth(food.getHealing());
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

    public setHealth(healthAdded: number): void {
        var actualHp: number = this.getHealth();
        var maxHp: number = this.getMaxHealth();
        var healed: number = healthAdded;
        if (healthAdded < 0) {
            this.health = Math.max(actualHp + healthAdded, 0);
            if (this.getHealth() == 0) {
                console.log(this.getName() + ` has been struck down!`);
            }
            else {
                console.log(this.getName() + ` has taken ` + healed * -1 + ` points of damage!`); //* -1 to make it positive
            }
        }
        else {
            this.health = Math.min(actualHp + healthAdded, maxHp);
                if (actualHp + healthAdded > maxHp) {
                    healed = maxHp - actualHp;
            }
            console.log(this.getName() + ` has recovered ` + healed + ` points of its health!`);
        }
    }

    public setShots(shots: number): void {
        this.shots = shots;
    }

    public setState(state: string): void {
        this.state = state;
    }
    // #endregion

}