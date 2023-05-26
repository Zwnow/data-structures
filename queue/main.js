var Queue = /** @class */ (function () {
    function Queue() {
    }
    // Appends at the end of the list!
    Queue.prototype.append = function (value) {
        var node = { value: value, next: null, prev: null };
        if (!this.head) {
            this.head = node;
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
    // Dequeues at the beginning of the list!
    Queue.prototype.dequeue = function () {
        if (!this.head && !this.tail) {
            return;
        }
        else {
            var output = this.head.value;
            this.head = this.head.next;
            return output;
        }
    };
    Queue.prototype.print = function () {
        if (this.head) {
            var runner = this.head;
            console.log(runner.value);
            while (runner.next != null) {
                runner = runner.next;
                console.log(runner.value);
            }
        }
    };
    return Queue;
}());
// Test
var queue = new Queue();
queue.append(1);
queue.append(3);
queue.append(3);
queue.append(7);
queue.print();
console.log("---");
console.log(queue.dequeue());
console.log("---");
queue.print();
