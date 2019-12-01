// React.FC의 장단점
// 장점 1 : props에 기본적으로 children이 포함됨.
// 장점 2 : 컴포넌트의 defaultProps, propTypes, contextTypes를 설정할 때 자동완성이 될수 있다는 것.
// 단점 : children이 옵셔널이라 컴포넌트 props가 명백하지 않음.

import React from 'react';

type GreetingsProps = {
  name: string;
}

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
  <div> Hello, {name}</div>
);

// 단점 : children이 옵셔널이라 컴포넌트 props가 명백하지 않음.
// 확실히 사용하고 싶다면 GreetingProps에 명시를 해야함.

// export default Greetings;