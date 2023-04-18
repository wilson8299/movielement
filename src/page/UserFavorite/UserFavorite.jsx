import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { userInfo } from "@/store/authSlice";
import { useGetAllFavoriteMoviesQuery } from "@/services/movieApiSlice";
import { MovieCard, LoadingSpinner } from "@/components";
import { MovieItems } from "./UserFavorite.style";

const UserFavorite = () => {
  const user = useSelector(userInfo);
  const { data, isLoading } = useGetAllFavoriteMoviesQuery({ userId: user.id });

  if (isLoading) return <LoadingSpinner />;
  console.log(data);
  return (
    <Fragment>
      {data.length ? (
        <MovieItems>
          {data.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </MovieItems>
      ) : (
        <h2>You don't have favirote movie.</h2>
      )}
    </Fragment>
  );
};

export default UserFavorite;
