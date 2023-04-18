import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Card, Img, Content, Title, Rating, Overlay, More } from "./MovieCard.style";

const CardItem = ({ id, name, posterPath, voteAverage }) => {
  return (
    <Card to={`/movie/${id}`}>
      <Img src={`https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}`} />
      <Content>
        <Title>{name}</Title>
        <Rating>
          <AiFillStar />
          <span>{Math.round(voteAverage * 10) / 10}</span>/ 10
        </Rating>
      </Content>
      <More>More</More>
      <Overlay />
    </Card>
  );
};

export default CardItem;
