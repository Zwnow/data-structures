// A singly linked list needs a Link object/class
// (in this case its an interface so I can implement it as generic):
//
// The "Link" contains a value and points to either
// the next "Link", or nothing.
//
// In code it should look like this:
// The Singly-Linked-List itself only needs a "Link" attribute as Head
// class SinglyLinkedList<T> {
//   private head: Link<T>;
// };
// That's it. You basically implemented a Singly Linked List.
// To work with it there should be methods that for example append the
// list though.
//
// So let's do so:
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
    }
    SinglyLinkedList.prototype.append = function (value) {
        var node = { value: value, next: null };
        if (!this.head) {
            this.head = node;
        }
        else {
            var runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            runner.next = node;
        }
        return this;
    };
    SinglyLinkedList.prototype.print = function () {
        if (!this.head) {
            console.log("Empty list");
            return;
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.value);
            runner = runner.next;
        }
    };
    return SinglyLinkedList;
}());
// Let's test it with different data-types.
var numbers = new SinglyLinkedList();
numbers.append(1);
numbers.append(3.01);
numbers.append("h");
numbers.append(7);
numbers.print();
