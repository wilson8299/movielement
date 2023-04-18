import { apiSlice } from "./apiSlice";

export const peopleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPopularPeople: builder.query({
      keepUnusedDataFor: 600,
      query: (page = 1) => ({
        url: `/people/popular?page=${page}`,
        method: "GET",
      }),
    }),
    getPeopleDetail: builder.query({
      query: (id) => ({
        url: `/people/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPopularPeopleQuery, useGetPeopleDetailQuery } = peopleApiSlice;
