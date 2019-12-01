// 타입스크립트의 기본 타입

let count = 0; // 숫자
count += 1;

// count = '갑자기 분위기 문자열'; // 에러

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// message.push(1); // 숫자를 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number일 수도 있고 null일 수도 있음.

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임.
color = 'yellow';
console.log(color);

// color = 'green'; // 에러 발생!
