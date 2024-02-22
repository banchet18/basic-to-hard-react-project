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
  justify-content: space-between;
  align-items: center;
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
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;

  align-items: center;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

function App() {
  return (
    <container>
      <Header>
        <AppName>
          <MovieImage src="/movie-icon.svg"></MovieImage>React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src="/search-icon.svg"></SearchIcon>
        </SearchBox>
      </Header>
      the indian
    </container>
  );
}

export default App;
