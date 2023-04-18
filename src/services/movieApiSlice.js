import { apiSlice } from "./apiSlice";

export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: (type) => ({
        url: `/movie/bytype?type=${type}`,
        method: "GET",
      }),
    }),
    getMovieDetail: builder.query({
      keepUnusedDataFor: 86400,
      query: ({ movieId, userId }) => ({
        url: `/movie/${movieId}`,
        method: "GET",
        params: { userId: userId },
      }),
    }),
    getMovieIsFavorite: builder.query({
      keepUnusedDataFor: 0,
      query: ({ movieId, userId }) => ({
        url: `/movie/isfavorite`,
        method: "GET",
        params: { movieId: movieId, userId: userId },
      }),
    }),
    toggleFavoriteMovie: builder.mutation({
      query: (body) => ({
        url: "/movie/togglefavorite",
        method: "POST",
        credentials: "include",
        sameSite: "None",
        secure: true,
        body: body,
      }),
    }),
    getMovieBySort: builder.query({
      query: (params) => {
        const searchParams = new URLSearchParams();
        for (let key in params) {
          searchParams.append(key, params[key]);
        }
        return {
          url: `/movie/bysort`,
          method: "GET",
          params: searchParams,
        };
      },
    }),
    getAllFavoriteMovies: builder.query({
      keepUnusedDataFor: 0,
      query: ({ userId }) => ({
        url: `/movie/allfavorite`,
        method: "GET",
        params: { id: userId },
      }),
    }),
  }),
});

export const {
  useGetMovieQuery,
  useGetMovieDetailQuery,
  useGetMovieIsFavoriteQuery,
  useGetMovieBySortQuery,
  useLazyGetMovieBySortQuery,
  useGetAllFavoriteMoviesQuery,
  useToggleFavoriteMovieMutation,
} = movieApiSlice;
