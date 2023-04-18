import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";
import {
  Wrapper,
  Container,
  Content,
  Side,
  Main,
  Title,
  SubTitle,
  MenuLink,
} from "./Profile.style";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container>
        <Title>Title</Title>
        <Content>
          <Side>
            <SubTitle>Profile</SubTitle>
            <MenuLink to="info">Info</MenuLink>
            <MenuLink to="favorite">Favorite</MenuLink>
            <SubTitle>Others</SubTitle>
            <MenuLink to="/" onClick={() => dispatch(logout())}>
              Logout
            </MenuLink>
          </Side>
          <Main>
            <Outlet />
          </Main>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Profile;
