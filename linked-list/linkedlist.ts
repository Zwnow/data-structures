// A linked list is basically a singly linked list
// with the ability to traverse in both directions.
//
// So this time we need a Link that takes 2 pointers
// and a value:

interface Link<T> {
  value: T | undefined;
  next: Link<T> | undefined;
  prev: Link<T> | undefined;
}

// The list now comes with a head AND a tail.

class LinkedList<T> {
  private head: Link<T>;
  private tail: Link<T>;

  public append(value: T): LinkedList<T> {
    let node = { value: value, next: null, prev: null };

    if (!this.head && !this.tail) {
      this.tail = node;
    } else if (this.head && !this.tail) {
      node.prev = this.head;
      this.tail = node;
    } else if (!this.head && this.tail) {
      let runner = this.tail;

      while (runner.next != null) {
        runner = runner.next;
      }
      node.prev = runner;
      runner.next = node;
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
  public print() {
    if (!this.head) {
      if (!this.tail) {
        console.log("Empty list");
        return;
      } else {
        let runner = this.tail;
        while (runner) {
          console.log(runner.value);
          runner = runner.next;
        }
      }
    } else {
      let runner = this.head;
      while (runner) {
        console.log(runner.value);
        runner = runner.next;
      }
    }
  }
}

// lets test:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
list.append(6);
list.append(9);
list.print();
