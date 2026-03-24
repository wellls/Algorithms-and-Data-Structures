export default class UnorderedArray {
  constructor() {
    this.data = [];
  }

  // Insert at the end → O(1)
  insert(value) {
    this.data.push(value);
  }

  // Find index of a value → O(n)
  find(value) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === value) {
        return i;
      }
    }
    return -1;
  }

  // Remove a value → O(n)
  remove(value) {
    const index = this.find(value);

    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  // Display elements → O(n)
  print() {
    console.log(this.data);
  }
}