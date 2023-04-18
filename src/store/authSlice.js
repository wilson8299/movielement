import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: { id: null, name: null, email: null, token: null },
  reducers: {
    setUserInfo: (state, { payload: { id, name, email, token } }) => {
      state.id = id;
      state.name = name;
      state.email = email;
      state.token = token;
    },
    setToken: (state, { payload: { token } }) => {
      state.token = token;
    },
    logout: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.token = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(
  //       authApiSlice.endpoints.register.matchFulfilled,
  //       (state, { payload }) => {
  //         state.id = payload.id;
  //         state.name = payload.name;
  //         state.email = payload.email;
  //         state.token = payload.token;
  //       }
  //     )
  //     .addMatcher(authApiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
  //       state.id = payload.id;
  //       state.name = payload.name;
  //       state.email = payload.email;
  //       state.token = payload.token;
  //     })
  //     .addMatcher(authApiSlice.endpoints.refresh.matchFulfilled, (state, { payload }) => {
  //       state.token = payload.token;
  //     });
  // },
});

export default slice.reducer;

export const { setUserInfo, setToken, logout } = slice.actions;

export const userInfo = (state) => state.auth;
