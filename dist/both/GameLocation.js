"use strict";
class GameLocation {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.visited = false;
    }
    // #region Getters and Setters
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getVisited() {
        return this.visited;
    }
    setVisited(visited) {
        this.visited = visited;
    }
}
