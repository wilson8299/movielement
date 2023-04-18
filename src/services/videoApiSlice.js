import { apiSlice } from "./apiSlice";

export const videoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTrailer: builder.query({
      query: (type) => ({
        url: `/video/trailer`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTrailerQuery } = videoApiSlice;
