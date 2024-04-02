type User = {
    id: number;
    name: string;
    readonly age: number;
    email: string;
};

const user: User = {
    id: 1,
    name: "Ivan",
    age: 25,
    email: "323",
};

//user.age = 26; // Error
console.log(user);

function assertTrue(condition: boolean, message?: string) {
    if (!condition) {
        if (!message) {
            message = 'Assertion failed';
        }
        throw new Error(message);
    }
}

const a = {
    data: {
        success: {
            d: "value"
        },
        error: {
            r: "message"
        }
    }
}

const value = a.data.success?.d ?? null;

if (value) {
    console.log(value);
}

type Animal = {
    name: string;
};

type Human = {
    name: string;
    age: number;
};

function someFunction(something: Animal & Human) {
    console.log(something);
}

function someFunction2(something: Animal | Human) {
    console.log(something);
}

const myHuman: Human = {
    name: "Ivan",
    age: 25
};
const myAnimal: Animal = {
    name: "Dog"
};

someFunction(myHuman);
//someFunction(myAnimal); will throw an error because myAnimal does not have age property
//assertTrue(1 > 2);

let size: "small" | "medium" = "small";
//size = "large"; error bacause literal type is expected
