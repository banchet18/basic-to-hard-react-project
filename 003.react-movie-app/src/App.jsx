import styled from "styled-components";

const Container = styled.div`
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
  box-shadow: 0 3px 6px 0 #333;
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
  background-color: white;
  width: 50%;
  border-radius: 6px;
  padding: 10px 10px;
  margin-left: 20px;
  border: 2px solid red;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/movie-icon.svg"></MovieImage> React-app
        </AppName>
        <SearchBox>
          <SearchIcon src="/search-icon.svg"></SearchIcon>
        </SearchBox>
      </Header>
      App
    </Container>
  );
};
export default App;
