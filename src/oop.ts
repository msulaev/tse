abstract class Figure {
    abstract calcArea(): number;
}

class Circle extends Figure {
    radius: number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    calcArea() : number{
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Figure {
    side: number;

    constructor(side: number){
        super();
        this.side = side;
    }

    calcArea(): number{
        return this.side ** 2;
    }
}

const circle = new Circle(5); 
console.log(circle.calcArea());
const square = new Square(5);
console.log(square.calcArea());

class MySQL implements iDatabase{
    private static instance: MySQL;

    private constructor() {
        console.log('MySQL instance created');
    }

    static getInstance() {
        if (!MySQL.instance) {
            MySQL.instance = new MySQL();
        }
        return MySQL.instance;
    }

    query(sql: string) {
        console.log(sql);
    }

    disconnect() {
        console.log('MySQL instance disconnected');
    }
}

interface iDatabase {
    query(sql: string): void;
    disconnect(): void;
}

class Postgres  {
    private static instance: Postgres;

    private constructor() {
        console.log('Postgres instance created');
    }

    static getInstance() {
        if (!Postgres.instance) {
            Postgres.instance = new Postgres();
        }
        return Postgres.instance;
    }

    query(sql: string) {
        console.log(sql);
    }

    disconnect() {
        console.log('Postgres instance disconnected');
    }
}

class DBFactory {
    static getDatabase(type: string): iDatabase {
        if (type === 'mysql') {
            return MySQL.getInstance();
        } else if (type === 'postgres') {
            return Postgres.getInstance();
        }
        
        throw new Error(`Invalid database type: ${type}`);
    }
}

const mysql:iDatabase = DBFactory.getDatabase('mysql');
const postgres:iDatabase = DBFactory.getDatabase('postgres');
mysql.query('SELECT * FROM users');
