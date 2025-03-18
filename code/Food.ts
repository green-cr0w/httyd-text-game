export class Food {
    private readonly name: string //kind of food
    private readonly healing: number //how much health it gives back

    public getName(): string {
        return this.name;
    }

    public getHealing(): number {
        return this.healing;
    }
}

