class Iterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false,
                    }
                }

                this.index = 0;

                return {
                    done: true,
                    value: undefined,
                }
            }
        }
    }
}

function* generator(collection) {
    let index = 0;

    while(index < collection.length) {
        yield collection[index++];
    }
}

const array = ['this', 'is', 'iterator'];
const iterator = new Iterator(array);
const gen = generator(array);

// for (const val of iterator) {
//     console.log(`Value: ${val}`);
// }
//
// for (const val of gen) {
//     console.log(`Value: ${val}`);
// }

console.log(gen.next().value);
console.log(gen.next().value);
