class OldCalc {
    operations(t1, t2, oprations) {
        switch(oprations) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, operations) {
        switch(operations) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc();
const newCalc = new NewCalc();
const adapter = new CalcAdapter();

console.log(oldCalc.operations(10, 5, 'add'));
console.log(newCalc.add(10, 5));
console.log(adapter.operations(10, 5, 'add'));
