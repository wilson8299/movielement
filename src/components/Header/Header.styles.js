import styled, { css } from "styled-components";
import { Container as CTR, Color, Device } from "@/components/Styles";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: transparent;
  z-index: 999;
  transition: all 0.1s ease-in;

  @media ${Device.sm} {
    background-color: ${Color.general[900]};
  }

  &.sticky {
    background-color: ${Color.general[900]};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.75);
  }
`;

export const Container = styled(CTR)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Logo = styled(NavLink)`
  text-decoration: none;
  padding: 1rem 0;
  color: ${Color.primary[300]};
  font-weight: 800;
  font-size: 1.7rem;
  cursor: pointer;

  span {
    font-weight: 400;
    font-size: 1.4rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 26px;
    height: 3px;
    background-color: ${Color.primary[300]};
    margin-bottom: 4px;
    border-radius: 4px;
  }

  @media ${Device.sm} {
    display: flex;
  }
`;

export const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${Device.sm} {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.3s linear;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease-in;

  &:hover {
    color: ${Color.primary[300]};
  }
`;

export const MenuButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: none;
  transition: all 0.1s ease-in;

  &:hover {
    color: ${Color.primary[300]};
  }

  ${(props) =>
    props.signup &&
    css`
      background-color: ${Color.secondary[700]};
      border-radius: 20px;

      &:hover {
        color: ${({ theme }) => theme.text};
        background-color: ${Color.secondary[500]};
      }
    `}

  &:last-child {
    margin-left: 10px;
  }

  @media ${Device.sm} {
    &:last-child {
      margin-left: 0;
      margin-bottom: 14px;
    }
  }
`;

export const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${Color.primary[300]};
  border-radius: 4px;

  ${MenuLink} {
    &:hover {
      color: ${Color.general[100]};
      background-color: ${Color.primary[500]};
      border-radius: 4px;
    }
  }

  @media ${Device.sm} {
    display: flex;
    position: relative;
    background-color: transparent;

    ${MenuLink} {
      &:hover {
        color: ${Color.primary[300]};
        background-color: transparent;
      }
    }
  }
`;

export const UserLink = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${Color.primary[300]};
  background-color: transparent;
  border: none;
  transition: all 0.1s ease-in;

  @media ${Device.sm} {
    display: none;
  }
`;

export const UserInfoWraper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownMenu} {
    display: flex;
  }
`;
