import React from "react";
import Greetings from "./Greetings/Greetings";

const App: React.FC = () => {
  // props로 내려줄 함수를 만들어서 넣어준다.
  const onClick = (name: String) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="React" onClick={onClick} />;
};

export default App;

// 정리
// React.FC는 아직 이슈가 있어 해결될 때까지는 사용하지 않는 것이 좋다.
// 함수형 컴포넌트를 작성할 때는 에로우 펑션 / 일반 함수 아무거나 사용가능
// Props에 대한 타입은 interface / type aliases을 사용하면 되며 프로젝트 내부에서 일관성만 지키면 된다.
// 하지만 interface는 상속할 수 있지만 type aliases는 상속 할 수 없으니 용도에 맞게 사용하자
