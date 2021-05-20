
  const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2
    },
    perimeter: () => 2 * Math.PI * this.radius
  }

  let v1 = shape.diameter();
  let v2 = shape.perimeter();
  console.log(v1)
  console.log(v2)

  //v2=NaN,是因为箭头函数此时this指向的是window