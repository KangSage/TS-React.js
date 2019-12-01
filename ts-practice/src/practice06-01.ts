// Generics - I
// 함수에서 Generics 사용하기

function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1});

function mergeUseGenerics<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  }
} 

const mergedUseGenerics = mergeUseGenerics({ foo: 1 }, { bar: 1})

function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10);