import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { Container as CTR, Color, Device } from "@/components/Styles";

export const Wrapper = styled.div`
  padding-top: 63px;
  background-color: ${({ theme }) => theme.bg1};
  min-height: 100vh;
`;

export const Container = styled(CTR)``;

export const Content = styled.div`
  display: flex;

  @media ${Device.sm} {
    flex-direction: column;
  }
`;

export const Side = styled.div`
  flex: 0 0 260px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  margin: 0 60px 0 0;
  padding: 14px;
  background-color: ${({ theme }) => theme.bg2};

  @media ${Device.sm} {
    margin: 0;
  }
`;

export const Main = styled.div`
  flex: 1 1 auto;
`;

export const Title = styled.h2`
  display: block;
  color: ${({ theme }) => theme.text};
`;

export const SubTitle = styled.h3`
  margin: 6px 0;
`;

export const MenuLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-align: left;
  text-decoration: none;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${Color.primary[400]};
  }

  &.active {
    background-color: ${Color.primary[400]};
  }
`;
