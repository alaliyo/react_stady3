import { useState } from "react";
import styled from 'styled-components';

function App() {
  const [idValue, setIdValue] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setIdValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(idValue);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={idValue} onChange={onChange} placeholder="ID" />
        <button>로그인</button>
      </form>
    </div>
  );
}

export default App;

const Container = styled.div`
  background-color: ${p => p.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${p => p.theme.textColor};
`;