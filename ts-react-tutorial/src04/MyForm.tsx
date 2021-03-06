// 인풋 상태 관리하기

import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '',
    description: ''
  });

  const { name, description } = form;
  // e 값을 무엇으로 설정해야할지 모를 경우 일단 any로 설정
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
    }); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' value={name} onChange={onChange} />
      <input name='description' value={description} onChange={onChange} />
      <button type='submit'>등록</button>
    </form>
  );
}

export default MyForm;
