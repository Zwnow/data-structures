// A stack uses the last in first out principle
// it's implementation is similar to the linked list:
// Next we implement the stack with a push and a pop method
var Stack = /** @class */ (function () {
    function Stack() {
    }
    Stack.prototype.push = function (value) {
        var node = { value: value, prev: null };
        if (!this.top) {
            this.top = node;
        }
        else {
            node.prev = this.top;
            this.top = node;
        }
        return this;
    };
    Stack.prototype.pop = function () {
        if (!this.top) {
            return null;
        }
        else {
            var output = this.top.value;
            if (this.top.prev != null) {
                this.top = this.top.prev;
            }
            return output;
        }
    };
    Stack.prototype.print = function () {
        if (this.top) {
            var runner = this.top;
            console.log(runner.value);
            while (runner.prev != null) {
                runner = runner.prev;
                console.log(runner.value);
            }
        }
    };
    return Stack;
}());
// Tests
var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(3);
stack.push(7);
stack.print();
console.log("__________");
stack.pop();
stack.print();
