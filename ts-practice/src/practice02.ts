// 함수에서 타입 정의하기

function sum(x: number, y: number): number {
  return x + y;
  // return null;
}

sum(1, 2);

function sumArray(number: number[]): number {
  return number.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNoThing(): void {
  console.log('I am just saying hello world');
}
