import styled, { css } from "styled-components";
import { Container as CTR, Color } from "@/components/Styles";

export const MovieItems = styled.section`
  background-color: ${({ theme }) => theme.bg1};
  padding-top: ${({ topPadding }) => (topPadding && "70px") || 0};
  padding-bottom: ${({ bottomPadding }) => (bottomPadding && "70px") || 0};
`;

export const Container = styled(CTR)``;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h2 {
    display: block;
    color: ${({ theme }) => theme.text};
  }

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    text-decoration: none;
  }
`;

export const Trailer = styled.section`
  background-color: ${({ theme }) => theme.bg2};
  padding: 70px 0;
`;

export const People = styled.section`
  background-color: ${({ theme }) => theme.bg1};
  padding: 70px 0;
`;
