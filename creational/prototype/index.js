const car = {
    wheels: 4,
    init() {
        console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`);
    },
};

const carWithOwner1 = Object.create(car, {
    owner: {
        value: 'Дмитрий',
    },
});

const carWithOwner2 = Object.create(car, {
    owner: {
        value: 'Константин',
    },
});

carWithOwner1.init();
carWithOwner2.init();
