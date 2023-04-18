import styled, { css } from "styled-components";
import { Container as CTR, Color, Device } from "@/components/Styles";

export const Img = styled.div`
  flex: 0 0 300px;

  img {
    width: 100%;
  }

  @media ${Device.sm} {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1 1 auto;
  padding-left: 50px;

  @media ${Device.sm} {
    padding-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  margin: 10px 0 10px 0;
`;

export const Date = styled.p`
  font-size: 1.4rem;
  color: ${Color.general[500]};

  span {
    padding-left: 16px;
  }
`;

export const Genres = styled.div`
  display: flex;

  span {
    padding: 3px 6px;
    margin-right: 5px;
    background-color: ${Color.primary[500]};
    border-radius: 3px;
    cursor: default;
  }
`;

export const Tagline = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-style: italic;
  color: ${Color.general[400]};
`;

export const Overview = styled.div`
  h3 {
    margin: 20px 0 6px 0;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.3rem;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${Color.general[500]};

  svg {
    font-size: 1.4rem;
    color: ${Color.primary[300]};
  }

  span {
    padding: 0 6px;
    font-size: 1.4rem;
    color: ${Color.primary[300]};
  }
`;

export const Favorite = styled.label`
  display: inline-block;
  margin: 14px 0;
  cursor: pointer;
`;

export const FavoriteContent = styled.span`
  display: flex;

  svg {
    font-size: 1.3rem;

    path {
      fill: transparent;
      stroke: ${Color.secondary[300]};
    }
  }

  span {
    margin: 0;
    padding-left: 6px;
    user-select: none;
  }
`;

export const FavoriteCheckbox = styled.input`
  display: none;

  &:checked {
    & + ${FavoriteContent} {
      svg {
        transform: scale(1.1);

        path {
          fill: ${Color.secondary[300]};
        }
      }

      span {
        font-weight: 600;
      }
    }
  }
  &:hover {
    & + ${FavoriteContent} {
      svg {
        transform: scale(1.1);
      }

      span {
        font-weight: 600;
      }
    }
  }
`;
