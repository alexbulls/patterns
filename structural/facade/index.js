class Complaints {
    constructor() {
        this.complaints = [];
    }

    add(complaint) {
        this.complaints.push(complaint);

        return this.reply(complaint);
    }

    reply(complaint) {}
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details } = {}) {
        return `Product: ${id}, ${customer}(${details})`;
    }
}

class ServiceComplaints extends Complaints {
    reply({ id, customer, details } = {}) {
        return `Service: ${id}, ${customer}(${details})`;
    }
}

class ComplaintsRegistry {
    register(customer, type, details) {
        let complaint;
        const id = Date.now();

        if (type === 'service') {
            complaint = new ServiceComplaints();
        }

        if (type === 'product') {
            complaint = new ProductComplaints();
        }

        return complaint.add({ id, customer, details });
    }
}

const registry = new ComplaintsRegistry();

console.log(registry.register('Alex', 'service', 'Недоступен'));
console.log(registry.register('Igor', 'product', 'Ошибка'));
