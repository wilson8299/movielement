import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo, logout } from "@/store/authSlice";
import {
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  MenuButton,
  UserInfoWraper,
  UserLink,
  DropdownMenu,
  Container,
} from "./Header.styles";
import { RegisterModal, LoginModal } from "@/components";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(userInfo);
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = React.useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen] = React.useState(false);

  useEffect(() => {
    const isSticky = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sticky]);

  return (
    <Nav className={`${sticky ? "sticky" : ""}`}>
      <Container>
        <Logo to="/">
          MoviE<span>lement</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen((prev) => !prev)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MenuLink>
          <MenuLink to="movie" onClick={(e) => setIsOpen(false)}>
            Movie
          </MenuLink>
          <MenuLink to="people" onClick={() => setIsOpen(false)}>
            People
          </MenuLink>
          {user.token ? (
            <UserInfoWraper>
              <UserLink>{user.name}</UserLink>
              <DropdownMenu>
                <MenuLink to={user.name + "/info"} onClick={() => setIsOpen(false)}>
                  Profile
                </MenuLink>
                <MenuLink
                  to="/"
                  onClick={() => {
                    dispatch(logout());
                    setIsOpen(false);
                  }}
                >
                  Logout
                </MenuLink>
              </DropdownMenu>
            </UserInfoWraper>
          ) : (
            <>
              <MenuButton onClick={() => setLoginModalIsOpen((prev) => !prev)}>
                Log In
              </MenuButton>
              <MenuButton signup onClick={() => setRegisterModalIsOpen((prev) => !prev)}>
                Sign Up
              </MenuButton>
            </>
          )}

          <RegisterModal
            modalIsOpen={registerModalIsOpen}
            setModalIsOpen={setRegisterModalIsOpen}
          />
          <LoginModal
            modalIsOpen={loginModalIsOpen}
            setModalIsOpen={setLoginModalIsOpen}
          />
        </Menu>
      </Container>
    </Nav>
  );
};

export default Header;
