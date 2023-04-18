import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        credentials: "include",
        sameSite: "None",
        secure: true,
        body: { name: body.name, email: body.email, password: body.password },
      }),
      invalidatesTags: [{ type: "POST" }],
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",
        sameSite: "None",
        secure: true,
        body: body,
      }),
    }),
    chagePassword: builder.mutation({
      query: (body) => ({
        url: "/auth/changepassword",
        method: "POST",
        credentials: "include",
        sameSite: "None",
        secure: true,
        body: body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useChagePasswordMutation } =
  authApiSlice;
