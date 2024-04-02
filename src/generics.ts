
function print<T>(str: T) {
    if (typeof str === 'string') {
        console.log('It is a string');
    } else if (typeof str === 'number') {
        console.log('It is a number');
    } else {
        console.log('It is not a string or number');
    }
}

print<string>('Hello world');

class myNode<T> {
    val: T;
    next: myNode<T> | null;
    constructor(val: T, next: myNode<T> | null = null) {
        this.val = val;
        this.next = next;
    }
}

const first = new myNode("first");
const second = new myNode("second");
const third = new myNode("third");
first.next = second;
second.next = third;

console.log(first.next.val);