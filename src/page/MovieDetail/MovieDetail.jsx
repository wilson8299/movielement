import React from "react";
import ReactPlayer from "react-player";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userInfo } from "@/store/authSlice";
import {
  useGetMovieDetailQuery,
  useGetMovieIsFavoriteQuery,
  useToggleFavoriteMovieMutation,
} from "@/services/movieApiSlice";
import { MovieDetailBanner, PeopleCard, MovieCard, LoadingSpinner } from "@/components";
import {
  Wrapper,
  Banner,
  BannerContainer,
  Content,
  Main,
  Side,
  Title,
  Items,
  Info,
  YtPlayer,
} from "./MovieDetail.style";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const MovieDetail = () => {
  const navigate = useNavigate();
  const user = useSelector(userInfo);
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieDetailQuery({
    movieId: id,
    userId: user?.id,
  });
  const { data: favorite, isLoading: favoriteIsLoading } = useGetMovieIsFavoriteQuery({
    movieId: id,
    userId: user?.id,
  });
  const [favoriteMoviePost, { isLoading: favoriteMoviePostIsLoading }] =
    useToggleFavoriteMovieMutation();

  if (error) navigate("/404", { replace: true });
  if (isLoading || favoriteIsLoading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <Banner bg={`https://image.tmdb.org/t/p/w1280${data.backdropPath}`}>
        <BannerContainer>
          <MovieDetailBanner
            {...data}
            user={user}
            favorite={favorite.isFavorite}
            favoriteMoviePost={favoriteMoviePost}
            favoriteMoviePostIsLoading={favoriteMoviePostIsLoading}
          />
        </BannerContainer>
      </Banner>
      <Content>
        <Main>
          <Title>Top Cast</Title>
          <Items ew="110px">
            {data.credits.map((credit) => (
              <PeopleCard key={credit.id} {...credit} />
            ))}
          </Items>
          <Title>Recommend Movie</Title>
          <Items ew="220px">
            {data.similars.map((similar) => (
              <MovieCard key={similar.id} {...similar} />
            ))}
          </Items>
          <Title>Trailer</Title>
          <Items ew="360px">
            {data.trailer.map((tra) => {
              return (
                <YtPlayer key={tra}>
                  <ReactPlayer
                    style={{ position: "absolute", top: "0", left: "0" }}
                    width="100%"
                    height="100%"
                    controls={true}
                    light
                    url={`https://www.youtube.com/watch?v=${tra}`}
                  />
                </YtPlayer>
              );
            })}
          </Items>
        </Main>
        <Side>
          <Title side>Original Language</Title>
          <Info>{data.originalLanguage}</Info>
          <Title side>Budget</Title>
          <Info>{formatter.format(data.budget)}</Info>
          <Title side>Revenue</Title>
          <Info>{formatter.format(data.revenue)}</Info>
          <Title side>Production Company</Title>
          {data.productionCompany.map((company) => (
            <Info key={company}>{company}</Info>
          ))}
        </Side>
      </Content>
    </Wrapper>
  );
};

export default MovieDetail;
