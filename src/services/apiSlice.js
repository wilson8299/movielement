import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { setToken } from "../store/authSlice";
// process.env.REACT_APP_SERVER_URL
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_SERVER_URL,
  credentials: "include",
  sameSite: "None",
  secure: true,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const mutex = new Mutex();

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // console.log(result);
  if (
    result?.error?.status === 401 &&
    result?.error?.data?.ErrorCode === "ExpiredToken"
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          { url: "/auth/refresh", method: "POST" },
          api,
          extraOptions
        );
        console.log(refreshResult);
        if (
          refreshResult?.error?.data?.ErrorCode === "EmptyRefreshToken" ||
          refreshResult?.error?.data?.ErrorCode === "InvalidRefreshToken"
        ) {
          // console.log("Logout");
        } else {
          // console.log({ token: refreshResult });
          api.dispatch(setToken({ token: refreshResult.data.token }));
          result = await baseQuery(args, api, extraOptions);
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Post", "MovieDetail"],
  endpoints: (builder) => ({}),
});
