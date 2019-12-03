import React, { useState } from "react";

// 상태가 null이 가능할 경우 Generics를 사용하면 좋다
type Information = { name: String; description: string };
const [info, setInformation] = useState<Information | null>(null);

// 상태의 타입이 복잡한 구조의 객체 혹은 배열일 경우 명시하는 것이 좋다.
type Todo = { id: number; text: string; done: boolean };
const [todos, setTodos] = useState<Todo[]>([]);

// 배열의 경우 빈 배열만 넣었을 경우 타입 추론이 불가하다
// 다음과 같이 할 수 있으나 코드가 깔끔하지 않다.
// const [todos, setTodos] = useState([] as Todo[]);
