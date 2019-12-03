import { useRef } from 'react';

// Generic을 통해 .current의 값을 추론 가능.
const id = useRef<number>(0);

const increaseId = () => {
  id.current += 1;
};
