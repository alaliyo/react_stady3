import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <Father>
      <Box>
        <Title>와라라라</Title>
      </Box>
    </Father>
  );
}
export default App;

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  height: 98vh;
  width: 98vw;
  background-color: ${p => p.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${p => p.theme.textColor};
`