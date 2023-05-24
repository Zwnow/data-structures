// A linked list is basically a singly linked list
// with the ability to traverse in both directions.
//
// So this time we need a Link that takes 2 pointers
// and a value:
// The list now comes with a head AND a tail.
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.append = function (value) {
        var node = { value: value, next: null, prev: null };
        if (!this.head && !this.tail) {
            this.tail = node;
        }
        else if (this.head && !this.tail) {
            node.prev = this.head;
            this.tail = node;
        }
        else if (!this.head && this.tail) {
            var runner = this.tail;
            while (runner.next != null) {
                runner = runner.next;
            }
            node.prev = runner;
            runner.next = node;
        }
        else {
            var runner = this.head;
            while (runner.next != null) {
                runner = runner.next;
            }
            node.prev = runner;
            runner.next = node;
        }
        return this;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            if (!this.tail) {
                console.log("Empty list");
                return;
            }
            else {
                var runner = this.tail;
                while (runner) {
                    console.log(runner);
                    runner = runner.next;
                }
            }
        }
        else {
            var runner = this.head;
            while (runner) {
                console.log(runner.value);
                runner = runner.next;
            }
        }
    };
    return LinkedList;
}());
// lets test:
var list = new LinkedList();
list.append(1);
list.append(2);
list.append(4);
list.append(6);
list.append(9);
list.print();
