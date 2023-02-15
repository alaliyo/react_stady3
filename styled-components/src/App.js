import styled from 'styled-components';

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}
export default App;

const Father = styled.div`
  display: flex;
`; 

const Box = styled.div`
  background-color: ${(e) => e.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`