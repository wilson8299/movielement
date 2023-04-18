import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Card, ImgWrapper, Img, Content, Title, Info } from "./PeopleCard.style";

const PeopleCard = ({ id, name, character, profilePath, knownForDepartment }) => {
  return (
    <Card to={`/people/${id}`}>
      <ImgWrapper>
        {profilePath ? (
          <Img src={`https://image.tmdb.org/t/p/original${profilePath}`} />
        ) : (
          <BsFillPersonFill />
        )}
      </ImgWrapper>
      <Content>
        <Title>{name}</Title>
        {character ? <Info>{character}</Info> : <Info>{knownForDepartment}</Info>}
      </Content>
    </Card>
  );
};

export default PeopleCard;
