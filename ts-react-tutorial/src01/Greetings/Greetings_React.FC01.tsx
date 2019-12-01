// 새로운 컴포넌트 만들기

import React from 'react';

type GreetingsProps = {
  name: string;
}

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
  <div> Hello, {name}</div>
);

// export default Greetings;