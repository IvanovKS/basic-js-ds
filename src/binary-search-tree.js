const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }
  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
  has(data) {
    return this._findNode(this.root, data) !== null;
  }
  find(data) {
    return this._findNode(this.root, data);
  }
  _findNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }
  remove(data) {
    this.root = this._removeNode(this.root, data);
  }
  _removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minValue = this._findMinValue(node.right);
        node.data = minValue;
        node.right = this._removeNode(node.right, minValue);
        return node;
      }
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }
  _findMinValue(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this._findMinValue(node.left);
    }
  }
  min() {
    if (this.root === null) {
      return null;
    }
    return this._findMinValue(this.root);
  }
  _findMaxValue(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return this._findMaxValue(node.right);
    }
  }
  max() {
    if (this.root === null) {
      return null;
    }
    return this._findMaxValue(this.root);
  }
}


module.exports = {
  BinarySearchTree
};