import styled from "styled-components";

const container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

function App() {
  return (
    <container>
      <Header>React Movie App</Header>the indian
    </container>
  );
}

export default App;
