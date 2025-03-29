export abstract class Item {
    private readonly name: string;
    private readonly description: string;
    private readonly isUsable: boolean;
    
    constructor(name: string, description: string, isUsable: boolean) {
        this.name = name;
        this.description = description;
        this.isUsable = isUsable;
    }

    // #region Getters and Setters    
    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getIsUsable(): boolean {
        return this.isUsable;
    }
    // #endregion
}