import styled from 'styled-components';

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
    </Father>
  );
}
export default App;

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`

`;