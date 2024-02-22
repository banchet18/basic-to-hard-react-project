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
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

function App() {
  return (
    <container>
      <Header>
        <AppName>
          <MovieImage src="/movie-icon.svg"></MovieImage>React Movie App
        </AppName>
      </Header>
      the indian
    </container>
  );
}

export default App;
