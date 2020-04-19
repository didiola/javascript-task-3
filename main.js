function divisible(n) {
  this.param = n;
  this.result = Array.from({ length: this.param }, (_, index) => index + 1);
  let d2 = "yu";
  let d3 = "gi";
  let d5 = "oh";
  for (let i = 1; i <= this.param; i++) {
    if (i % 2 === 0) {
      this.result.splice(i - 1, 1, d2);
    }
    if (i % 3 === 0) {
      this.result.splice(i - 1, 1, d3);
    }
    if (i % 5 === 0) {
      this.result.splice(i - 1, 1, d5);
    }
    if (i % 2 === 0 && i % 3 === 0) {
      this.result.splice(i - 1, 1, `${d2}-${d3}`);
    }
    if (i % 2 === 0 && i % 5 === 0) {
      this.result.splice(i - 1, 1, `${d2}-${d5}`);
    }
    if (i % 3 === 0 && i % 5 === 0) {
      this.result.splice(i - 1, 1, `${d3}-${d5}`);
    }
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      this.result.splice(i - 1, 1, `${d2}-${d3}-${d5}`);
    }
  }
  return this.result;
}

divisible(100);
divisible(45);