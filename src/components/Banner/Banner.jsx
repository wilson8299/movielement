import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import {
  Container,
  SwiperSlideStyled,
  Img,
  Content,
  Title,
  Date,
  Overview,
  Rating,
  Tags,
  More,
  PaginationButton,
} from "./Banner.style";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay
      pagination={{
        el: ".swiper-custom-pagination",
        clickable: true,
      }}
      slidesPerView={1}
      speed={800}
      loop
    >
      {data.map((info) => (
        <SwiperSlideStyled
          key={info.id}
          bg={`https://image.tmdb.org/t/p/w1280${info.backdropPath}`}
        >
          <Container>
            <Content>
              <Tags>
                {info.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </Tags>
              <Title>{info.name}</Title>
              <Date>{new window.Date(info.releaseDate).toISOString().slice(0, 10)}</Date>
              <Overview>{info.overview}</Overview>
              <Rating>
                <AiFillStar />
                <span>{Math.round(info.voteAverage * 10) / 10}</span>/ 10
              </Rating>
              <More href={`/movie/${info.id}`}>More Detail</More>
            </Content>
            <Img
              src={`https://image.tmdb.org/t/p/w342${info.posterPath}`}
              alt={info.name}
            />
          </Container>
        </SwiperSlideStyled>
      ))}
      <PaginationButton className="swiper-custom-pagination" />
    </Swiper>
  );
};

export default Banner;
