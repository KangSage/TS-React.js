// DOM 관리하기
import React, { useState, useRef } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    });
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={name} onChange={onChange} ref={inputRef} />
      <input name='description' value={description} onChange={onChange} />
      <button type='submit'>등록</button>
    </form>
  );
}

export default MyForm;

/**
 * 튜토리얼 요약
 * useState를 사용할 때는 useState<string> 처럼 Generics를 사용
 * useState의 제너릭스는 상황에 따라 생략 가능하나 null이나 배열, 복잡한 객체를 다루는 경우 명시한다.
 * useReducer를 사용할 때는 액션에 대한 타입을 모두 준비해서 | 문자로 결합한다.
 * TS 환경에서 useReducer를 사용하면 자동완성도 잘되고 타입체킹도 잘된다.
 * useRef를 사용할 땐 Generics로 타입을 정한다.
 * useRef를 사용하여 DOM에 대한 정보를 담을 땐
 * 초기값을 null로 설정하고 값을 사용하기 위해 null 체킹도 해주어야한다.
 */
