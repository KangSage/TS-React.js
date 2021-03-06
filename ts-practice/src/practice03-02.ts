// interface 사용해보기 - II

// Shape라는 interface를 선언합니다.
interface Shape {
  getArea(): number; //  Shape interface에는 getArea라는 함수가 꼭 구현되어야 하며 해당 함수의 리턴 값은 숫자다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 shape interface의 조건을 충족하겠다는 것을 명시.
  radius: number; // 멤버 변수 radius 값을 설정한다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현한다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 에러 없이 작동
// console.log(rectangle.width); // width가 private이기 때문에 에러 발생!

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
  console.log(shape.getArea());
})