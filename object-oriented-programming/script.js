const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

const player1 = {
    name: 'Hans',
    color: 'red',
    position: 0,
    cash: 1000,
    move: function () {
        console.log('move')
        dice = 1 + Math.floor(6 * Math.random())
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log('game over for ' + this.name);
        }
    }
}
const player2 = {
    name: 'Anna',
    color: 'blue',
    position: 0,
    cash: 1000,
    // to access properties in the same object we use the 'this' keyword
    move: function () {
        console.log('move')
        dice = 1 + Math.floor(6 * Math.random())
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log('game over for ' + this.name);
        }
    }
}
// const player3 = {
//     name: 'Ahmed',
//     color: 'green',
//     position: 0,
//     cash: 1000
// }

let dice;
// turn of player
// rolling the dice
dice = 1 + Math.floor(6 * Math.random())
console.log(dice)
// moving the player 
// player1.position = player1.position + dice;
// if ((player1.position + dice) > 15) {
//     player1.position = player1.position + dice - squares.length;
// } else {
//     player1.position = player1.position + dice;
// }
// or simpler using modulo
player1.position = (player1.position + dice) % squares.length;
// updating the cash
player1.cash += squares[player1.position];
console.log(player1.cash)
console.log(player1.position)

player1.move();

console.clear();

class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.position = 0;
        this.cash = 1000;
    }
    move() {
        console.log('move')
        dice = 1 + Math.floor(6 * Math.random())
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash <= 0) {
            console.log('game over for ' + this.name);
        }
    }
}
// to instantiate a class we use the keyword 'new' 
const playerX = new Player('Ahmed', 'blue');
// that is possible - but not a good practice
// playerX.name = 'Ahmed';
console.log(playerX)
playerX.move();

console.clear();
// Inheritance
// class Cat {
//     constructor(name, color, sound, numberOfLives) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//         this.numberOfLives = numberOfLives;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class Bird {
//     constructor(name, color, sound) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
//     fly() {
//         console.log('i am flying')
//     }
// }

class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Cat extends Animal {
    constructor(name, color, sound, numberOfLives) {
        super(name, color, sound);
        this.numberOfLives = numberOfLives;
    }
    makeSound() {
        // console.log(this.sound);
        super.makeSound();
        return 'and another sound'
    }

}

const cat = new Cat('tom', 'grey', 'meow', 7);
console.log(cat.makeSound());

class Bird extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
    fly() {
        return 'i am flying'
    }
}
const bird = new Bird('pete', 'yellow', 'peep');
bird.makeSound();