class GameLocation {
    private readonly name: string; //name of location
    private readonly description: string; //description of location
    private visited: boolean; //if player has visited location

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.visited = false;
    }

    // #region Getters and Setters
    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getVisited(): boolean {
        return this.visited;
    }

    public setVisited(visited: boolean): void {
        this.visited = visited;
    }
    // #endregion

}