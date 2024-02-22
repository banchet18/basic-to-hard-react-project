import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 3px 6px #aaa;
`;
const CoverImage = styled.img`
  height: 300px;
  width: 250px;
`;
const MovieName = styled.span`
  margin-top: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const YearTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const MovieComponent = () => {
  return (
    <MovieContainer>
      <CoverImage src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"></CoverImage>
      <MovieName>Guardians of the Galaxy Vol. 2</MovieName>
      <YearTypeContainer>
        <span>2012</span>
        <span>Type: Movie</span>
      </YearTypeContainer>
    </MovieContainer>
  );
};
export default MovieComponent;
