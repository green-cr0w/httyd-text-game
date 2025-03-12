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

    
}