import React, { Fragment } from "react";
import { useGetMovieQuery } from "@/services/movieApiSlice";
import { useGetTrailerQuery } from "@/services/videoApiSlice";
import {
  Banner,
  CardSwiper,
  TrailerItems,
  MovieCard,
  LoadingSpinner,
} from "@/components";
import { MovieItems, Container, Title, Trailer } from "./Home.style";

const Home = () => {
  const { data: popularData, isLoading: isPopularLoading } = useGetMovieQuery("popular");
  const { data: topRatedData, isLoading: isTopRatedLoading } =
    useGetMovieQuery("top_rated");
  const { data: upcomingData, isLoading: isUpcomingLoading } =
    useGetMovieQuery("upcoming");
  const { data: trailerData, isLoading: isTrailerLoading } = useGetTrailerQuery();

  if (isPopularLoading || isTopRatedLoading || isUpcomingLoading || isTrailerLoading)
    return <LoadingSpinner />;

  return (
    <Fragment>
      <Banner data={popularData.slice(0, 5)} />
      <MovieItems topPadding>
        <Container>
          <Title>
            <h2>Popular</h2>
          </Title>
          <CardSwiper>
            {popularData.slice(5).map((popular) => (
              <MovieCard key={popular.id} {...popular} />
            ))}
          </CardSwiper>
        </Container>
      </MovieItems>
      <MovieItems topPadding bottomPadding>
        <Container>
          <Title>
            <h2>Top Rating</h2>
          </Title>
          <CardSwiper>
            {topRatedData.map((topRated) => (
              <MovieCard key={topRated.id} {...topRated} />
            ))}
          </CardSwiper>
        </Container>
      </MovieItems>
      <Trailer>
        <Container>
          <Title>
            <h2>Now Playing</h2>
          </Title>
          <TrailerItems data={trailerData} />
        </Container>
      </Trailer>
      <MovieItems topPadding bottomPadding>
        <Container>
          <Title>
            <h2>Upcoming</h2>
          </Title>
          <CardSwiper>
            {upcomingData.map((upcoming) => (
              <MovieCard key={upcoming.id} {...upcoming} />
            ))}
          </CardSwiper>
        </Container>
      </MovieItems>
    </Fragment>
  );
};

export default Home;
