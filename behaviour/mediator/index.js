class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = [];
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            });
        }
    }
}

const alex = new User('Alex');
const nick = new User('Nick');
const sergey = new User('Sergey');

const room = new ChatRoom();

room.register(alex);
room.register(nick);
room.register(sergey);

alex.send('Hello Nick!', nick);
nick.send('Hello Alex!', alex);
sergey.send('Hello People!');
