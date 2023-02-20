class Animal {
    constructor(name, kind) {
        this.name1 = name;
        this.kind1 = kind;
    }
    speak(animalSound) {
        console.log(`${this.name1} says: ${animalSound}.`);
    }
}

let dog = new Animal(`Dog`, `Bulldog`);
let cat = new Animal(`Cat`, `White Cat`);
let pigeon = new Animal(`Pigeon`, `Anoying`);

dog.speak(`Woof Woof`);
cat.speak(`Meow Meow`);
pigeon.speak(`Chirp Chirp`);