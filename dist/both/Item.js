export class Item {
    constructor(name, description, isUsable) {
        this.name = name;
        this.description = description;
        this.isUsable = isUsable;
    }
    // #region Getters and Setters    
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getIsUsable() {
        return this.isUsable;
    }
}
