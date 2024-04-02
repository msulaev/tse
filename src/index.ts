import * as crypto from 'crypto';


function print(str: any) {
  console.log(str)
}

const str = 'Hello, World!';
let isHere: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let user: [ name: string, id: number ] = ["Ivan", 1];

const enum Size {"S"=0, "M"=1, "L"=2, "XL"=3};
function getSize(size: Size){
    const mySize = Size.L;
    return size === mySize;
}

console.log(getSize(Size.M));
print(str);

function checkNumber(s: number | string) : number {
    if (typeof s === 'number') {
        console.log('It is a number');
        return s * s;
    } else {
        console.log('It is not a number');
       return parseInt(s) * parseInt(s);
    }
}
let res: number = checkNumber("5kg");
console.log(res);

type User = {
    id: any,
    name: string,
    age: number;
    email: string;
};

type User2 = Omit<User, 'id'>;

const user1: User = {
    id: 1,
    name: "Ivan",
    age: 25,
    email: "213@sdas.df"
};

user1.age = 26;
console.log(user1);

function createUser(id: number, name: string, age: number): User {
    return {
        id: id,
        name: name,
        age: age,
        email: "" + id + "@gmail.com"
    };
}
function createOtherUser(user: User2): User {
    const id = crypto.randomUUID();
    return {
        id: id,
        ...user
    };
}

const user2: User = createUser(2, "Petro", 30);
const user3: User2 = {name: "Ivan", age: 25, email: "1"};
const user4: User = createOtherUser(user3);
console.log(user2);
console.log(user4);