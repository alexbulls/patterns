class Server {
    constructor(name, port, ip) {
        this.ip = ip;
        this.name = name;
        this.port = port;
    }

    getUrl() {
        return `https://${this.ip}:${this.port}`;
    }
}

const aws = new Server('AWS', '8080', '82.21.32.21');

console.log(aws.getUrl());
