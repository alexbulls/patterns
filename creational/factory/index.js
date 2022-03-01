class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership,
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const instance = new Membership(name);

        instance.type = type;
        instance.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return instance;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create('Alex', 'simple'),
    factory.create('Igor', 'premium'),
    factory.create('Anna', 'standart'),
];

console.log(members);
