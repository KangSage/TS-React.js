// Generics - II
// interface에서 Generics 사용하기

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};
