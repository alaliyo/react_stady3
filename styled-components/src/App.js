import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <Father>
      <Box>
        <span>🎅</span>
      </Box>
    </Father>
  );
}
export default App;

const Father = styled.div`
  display: flex;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(720deg);
    border-radius: 0px;
  }
`

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 3s linear infinite;
  span {
    font-size: 100px;
    &:hover {
      font-size: 50px;
    }
    &:active {
      opacity: 0;
    }
  }
`;