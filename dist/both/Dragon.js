export class Dragon {
    constructor(name, dragonClass, description, firePower, physicalPower, health, maxHealth, shots, maxShots, state, recharge, tooBig, eelEater) {
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
    updateState() {
        let checkup = this.getHealth() / this.getMaxHealth();
        if (checkup == 1) {
            this.setState(this.getName() + `nuzzles your hand. Your dragon looks healthy and ready to explore!`);
        }
        else if (checkup >= 0.5) {
            this.setState(this.getName() + `looks up at you with a bit of a tired expression, but still willing to keep going.`);
        }
        else if (checkup >= 0.25) {
            this.setState(this.getName() + `looks exhausted, maybe you should try to find some food and rest.`);
        }
    }
    //KILL IT WITH FIRE
    fireattack() {
        let actualShots = this.getShots();
        if (actualShots > 0) {
            this.setShots(actualShots - 1);
            console.log(this.getName() + ` attacks with fire!`);
        }
        else {
            console.log(this.getName() + ` is out of shots!`);
        }
    }
    //was that the bite of 87
    physicalattack() {
        console.log(this.getName() + ` attacks with a physical attack!`);
    }
    //recover fireshots
    recoverShots() {
        this.setShots(this.getMaxShots());
        console.log(this.getName() + ` has recovered its shots!`);
    }
    //yummy time
    feedDragon(food) {
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
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getClass() {
        return this.class;
    }
    getFirePower() {
        return this.firePower;
    }
    getPhysicalPower() {
        return this.physicalPower;
    }
    getHealth() {
        return this.health;
    }
    getMaxHealth() {
        return this.maxHealth;
    }
    getShots() {
        return this.shots;
    }
    getMaxShots() {
        return this.maxShots;
    }
    getState() {
        return this.state;
    }
    getRecharge() {
        return this.recharge;
    }
    getTooBig() {
        return this.tooBig;
    }
    getEelEater() {
        return this.eelEater;
    }
    setHealth(healthAdded) {
        var actualHp = this.getHealth();
        var maxHp = this.getMaxHealth();
        var healed = healthAdded;
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
    setShots(shots) {
        this.shots = shots;
    }
    setState(state) {
        this.state = state;
    }
}
