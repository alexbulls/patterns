class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers.filter(obs => obs !== observer);
    }

    emit(action) {
        this.observers.forEach(observer => {
            observer.update(action);
        });
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state;
        this.initialState = state;
    }

    update({ type, payload }) {
        switch(type) {
            case 'increment':
                this.state = ++this.state;
                break;
            case 'decrement':
                this.state = --this.state;
                break;
            case 'add':
                this.state += payload;
                break;
            default:
                this.state = this.initialState;
        }
    }
}

const stream = new Subject();

const obs1 = new Observer(2);
const obs2 = new Observer(42);

stream.subscribe(obs1);
stream.subscribe(obs2);

console.log(obs1.state);
console.log(obs2.state);

stream.emit({
    type: 'increment',
});

console.log(obs1.state);
console.log(obs2.state);

stream.emit({
    type: 'add',
    payload: 10,
});

console.log(obs1.state);
console.log(obs2.state);
