import React, { useState, Fragment, memo } from "react";
import { AiFillStar } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import {
  Content,
  Img,
  Title,
  Date,
  Genres,
  Tagline,
  Overview,
  Rating,
  Favorite,
  FavoriteCheckbox,
  FavoriteContent,
} from "./MovieDetailBanner.style";

const MovieDetailBanner = memo(
  ({
    id,
    poster,
    name,
    releaseDate,
    runtime,
    genres,
    tagline,
    overview,
    voteAverage,
    user,
    favorite,
    favoriteMoviePost,
    favoriteMoviePostIsLoading,
  }) => {
    const [isChacked, setIsChecked] = useState(favorite);

    const handleAddFavorite = async (e) => {
      try {
        await favoriteMoviePost({
          userId: user.id,
          movieId: id,
          name: name,
          posterPath: poster,
          voteAverage: voteAverage,
          isFavorite: e.target.checked,
        }).unwrap();

        setIsChecked((prev) => !prev);
      } catch (err) {
        console.error("Failed to toggle favorite", err.status, err.data);
      }
    };

    return (
      <Fragment>
        <Img>
          <img src={`https://image.tmdb.org/t/p/w342${poster}`} alt="" />
        </Img>
        <Content>
          <Genres>
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </Genres>
          <Title>{name}</Title>
          <Date>
            {releaseDate}
            <span>{Math.floor(runtime / 60) + "h " + (runtime % 60) + "m"}</span>
          </Date>
          <Tagline>{tagline}</Tagline>
          <Overview>
            <h3>Overview</h3>
            <p>{overview}</p>
          </Overview>
          <Rating>
            <AiFillStar />
            <span>{Math.round(voteAverage * 10) / 10}</span> / 10
          </Rating>
          {user.token && (
            <Favorite>
              <FavoriteCheckbox
                type="checkbox"
                onChange={handleAddFavorite}
                checked={isChacked}
                disabled={favoriteMoviePostIsLoading}
              />
              <FavoriteContent>
                <GrFavorite />
                <span>Add to Favorites</span>
              </FavoriteContent>
            </Favorite>
          )}
        </Content>
      </Fragment>
    );
  }
);

export default MovieDetailBanner;
