class Total {
    constructor(initialValue = 1) {
        this.total = initialValue;
    }

    add(value) {
        this.total += value;

        return this;
    }
}

const total = new Total();

total.add(1).add(1).add(1);

console.log(total.total);
