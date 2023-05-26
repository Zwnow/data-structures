interface Link<T> {
  value: T | undefined;
  next: Link<T> | undefined;
  prev: Link<T> | undefined;
}

class Queue<T> {
  private head: Link<T>;
  private tail: Link<T>;

  // Appends at the end of the list!
  public append(value: T): Queue<T> {
    let node = { value: value, next: null, prev: null };
    if (!this.head) {
      this.head = node;
    } else {
      let runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      node.prev = runner;
      runner.next = node;
    }
    return this;
  }

  // Dequeues at the beginning of the list!
  public dequeue(): T {
    if (!this.head && !this.tail) {
      return;
    } else {
      let output = this.head.value;
      this.head = this.head.next;
      return output;
    }
  }

  public print() {
    if (this.head) {
      let runner = this.head;
      console.log(runner.value);
      while (runner.next != null) {
        runner = runner.next;
        console.log(runner.value);
      }
    }
  }
}

// Test
let queue = new Queue();
queue.append(1);
queue.append(3);
queue.append(3);
queue.append(7);
queue.print();
console.log("---");
console.log(queue.dequeue());
console.log("---");
queue.print();
