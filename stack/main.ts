// A stack uses the last in first out principle
// it's implementation is similar to the linked list:

// First we create a Link as so:

interface Link<T> {
  value: T | undefined;
  prev: Link<T> | undefined;
}

// Next we implement the stack with a push and a pop method

class Stack<T> {
  private top: Link<T>;

  public push(value: T): Stack<T> {
    let node = { value: value, prev: null };
    if (!this.top) {
      this.top = node;
    } else {
      node.prev = this.top;
      this.top = node;
    }
    return this;
  }

  public pop(): T {
    if (!this.top) {
      return null;
    } else {
      let output = this.top.value;
      if (this.top.prev != null) {
        this.top = this.top.prev;
      }
      return output;
    }
  }

  public print() {
    if (this.top) {
      let runner = this.top;
      console.log(runner.value);
      while (runner.prev != null) {
        runner = runner.prev;
        console.log(runner.value);
      }
    }
  }
}

// Tests
let stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(3);
stack.push(7);
stack.print();
console.log("__________");
stack.pop();
stack.print();
