// example use class on js

class Polygon {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    let result = 0;
    for (let i = 0; i < this.side.length; i++) {
      result += this.side[i];
    }
    return result;
  }
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());
