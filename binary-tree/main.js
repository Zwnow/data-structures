var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
    }
    BinaryTree.prototype.append = function (value) {
        var node = { value: value, left: null, right: null };
        if (!this.head) {
            this.head = node;
        }
        else {
            var runner = this.head;
            while (runner.left && runner.right) {
                if (value >= runner.left.value) {
                    runner = runner.right;
                }
                else {
                    runner = runner.left;
                }
            }
            if (!runner.left && !runner.right) {
                runner.right = node;
            }
            else if (!runner.right && value >= runner.left.value) {
                runner.right = node;
            }
            else if (!runner.right && value < runner.left.value) {
                runner.right = runner.left;
                runner.left = node;
            }
            else if (!runner.left && value > runner.right.value) {
                runner.left = runner.right;
                runner.right = node;
            }
            else {
                runner.left = node;
            }
        }
        return this;
    };
    BinaryTree.prototype.print = function (node) {
        console.log(node.value);
        if (node.left) {
            this.print(node.left);
        }
        if (node.right) {
            this.print(node.right);
        }
    };
    return BinaryTree;
}());
var tree = new BinaryTree();
tree.append(10);
tree.append(20);
tree.append(30);
tree.append(5);
tree.print(tree.head);
