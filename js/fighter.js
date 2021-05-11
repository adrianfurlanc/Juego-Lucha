
class Fighter {

    constructor(name, health, attack, defense, luck) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.luck = luck;
    }

    attack(enemy) {

    }

    specialAttack(enemy) {

    }
}

let player1 = new Fighter("Pikachu", 100, 10, 5, 4);
let player2 = new Fighter("Greninja", 115, 5, 10, 6);
let player3 = new Fighter("Lucario", 110, 7, 12, 5);
let player4 = new Fighter("Charizard", 120, 12, 5, 4);

let allPlayers = {
    "1": player1,
    "2": player2,
    "3": player3,
    "4": player4
}
