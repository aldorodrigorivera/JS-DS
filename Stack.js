class Stack {
    constructor() {
        this.data = [];
    }
    // ADD ELEMENT
    push(value) {
        this.data.push(value);
        console.log('Added', value);
    }
    // REMOVE LAST ELEMENT [arr.length -1]
    pop() {
        if(this.data.length !== 0){
            this.data.pop();
            console.log('Removed');
        } else {
            console.log('Is Empty');
        }
           
    }
    // RETURN THE LAST ELEMENT
    peek() {
        console.log(this.data[this.data.length - 1]);
    }

    isEmpty() {
        console.log(this.data.length === 0);
    }

    print() {
        console.log("_______________________")
        this.data.map(item => console.log(item));
        console.log("_______________________")
    }

}

const stack = new Stack();
stack.push("Primis");
stack.push("Seguns");
stack.push("Tercis");
stack.print();
stack.peek();
stack.pop();
stack.print();

