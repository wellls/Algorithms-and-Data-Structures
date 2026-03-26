export default class OrderedArray {
  constructor() {
    this.data = [];
  }

  // Insert while keeping order → O(n)
  insert(value) {
    let i = 0;

    // find correct position
    while (i < this.data.length && this.data[i] < value) {
      i++;
    }

    this.data.splice(i, 0, value);
  }

  // Binary Search → O(log n)
  find(value) {
    let low = 0;
    let high = this.data.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (this.data[mid] === value) {
        return mid;
      }

      if (this.data[mid] < value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1;
  }

  // Remove value → O(n)
  remove(value) {
    const index = this.find(value);

    if (index === -1) return false;

    this.data.splice(index, 1);
    return true;
  }

  // Print → O(n)
  print() {
    console.log(this.data);
  }
}