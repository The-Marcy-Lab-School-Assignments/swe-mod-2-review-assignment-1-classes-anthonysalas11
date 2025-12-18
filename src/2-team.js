// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
constructor(name , position, jerseyNumber){
    this.name = name
    this.position = position
    this.jerseyNumber = jerseyNumber
    }
}



class Team {

    #starters = []
    #bench = []

    constructor(name){
        this.name = name 
    }

    get Starters() {
        return [...this.#starters]
}

    get Bench() {
        return [...this.#bench]
}
    addBenchPlayer(player) {
        this.#bench.push(player)
}
    getPlayerCount() {
    return this.#starters + this.#bench
}
    moveToBench(name) {

}
    moveToStarters(name) {

}



}

module.exports = { Player, Team };

