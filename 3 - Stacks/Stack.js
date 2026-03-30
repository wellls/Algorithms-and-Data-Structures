export default class Stack {
  constructor() {
    this.data = [];
    this.top = -1; // indica o topo da pilha
  }

  // Push → O(1)
  push(value) {
    this.top++; // sobe o topo
    this.data[this.top] = value; // insere manualmente
  }

  // Pop → O(1)
  pop() {
    if (this.isEmpty()) return null;

    const value = this.data[this.top]; // pega o topo
    this.data[this.top] = undefined;   // limpa (opcional)
    this.top--; // desce o topo

    return value;
  }

  // Peek → O(1)
  peek() {
    if (this.isEmpty()) return null;

    return this.data[this.top];
  }

  // Check empty → O(1)
  isEmpty() {
    return this.top === -1;
  }

  // Size → O(1)
  size() {
    return this.top + 1;
  }

  // Print → O(n)
  print() {
    let result = [];

    for (let i = 0; i <= this.top; i++) {
      result.push(this.data[i]);
    }

    console.log(result);
  }
}