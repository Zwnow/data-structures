// A singly linked list needs a Link object/class
// (in this case its an interface so I can implement it as generic):
//
// The "Link" contains a value and points to either
// the next "Link", or nothing.
//
// In code it should look like this:

interface Link<T> {
  value: T | undefined;
  next: Link<T> | undefined;
}

// The Singly-Linked-List itself only needs a "Link" attribute as Head

// class SinglyLinkedList<T> {
//   private head: Link<T>;
// };

// That's it. You basically implemented a Singly Linked List.
// To work with it there should be methods that for example append the
// list though.
//
// So let's do so:

class SinglyLinkedList<T> {
  private head: Link<T>;

  public append(value: T): SinglyLinkedList<T> {
    const node = { value: value, next: null };

    if (!this.head) {
      this.head = node;
    } else {
      let runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      runner.next = node;
    }
    return this;
  }

  public print() {
    if (!this.head) {
      console.log("Empty list");
      return;
    }
    let runner = this.head;
    while (runner) {
      console.log(runner.value);
      runner = runner.next;
    }
  }
}

// Let's test it with different data-types.
let numbers = new SinglyLinkedList();
numbers.append(1);
numbers.append(3.01);
numbers.append("h");
numbers.append(7);
numbers.print();
