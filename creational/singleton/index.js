class DataBase {
    constructor(data) {
        if (DataBase.exists) {
            return DataBase.instance;
        }

        this.data = data;

        DataBase.exists = true;
        DataBase.instance = this;
    }

    getData() {
        return this.data;
    }
}

const mongo = new DataBase('MongoDB');
const mysql = new DataBase('MySQL');

console.log(mongo.getData());
console.log(mysql.getData());
