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

    constructor(name: string, description: string, dragonClass: string, firePower: number, physicalPower: number, health: number, maxHealth: number, shots: number, maxShots: number, state: string) {
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
    }

    //update the state of the dragon
    updateState(state: string): void {
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

    //kill it with fire!
    fireattack(): void {
        if (this.shots > 0) {
            this.shots--;
            console.log(this.getName() + ' attacks with fire!');
        } else {
            console.log(this.getName() + ' is out of shots!');
        }
    }

    //was that the bite of 87
    physicalattack(): void {
        console.log(this.getName() + ' attacks with a physical attack!');
    }

    //ouch
    takeDamage(damage: number): void {
        this.health -= damage;
        console.log(this.getName() + ' took ' + damage + ' damage!');
        if (this.health <= 0) {
            this.health = 0;
            console.log(this.getName() + ' has been defeated!');
        }
    }

    //recover fireshots
    recoverShots(): void {
        this.shots = this.maxShots;
        console.log(this.getName() + ' has recovered its shots!');
    }

    //i need a healer
    recoverHealth(): void {
        this.health = this.maxHealth;
        console.log(this.getName() + ' has recovered its health!');
    }


    //getters and setters
    getName(): string {
        return this.name;
    }
}