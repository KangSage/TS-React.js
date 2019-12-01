// Generics - III
// Type alias에서 Generic 사용하기

type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ['a', 'b', 'c']
};

const numItems: Items<number> = {
  list: [1, 2, 3]
};

console.log(items);
console.log(numItems);

