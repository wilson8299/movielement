import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "@/components/Styles";

export const ImgWrapper = styled.div`
  flex: 0 0 auto;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    color: ${Color.general[500]};
  }
`;

export const Img = styled.img`
  max-width: 100%;
  transition: all 0.2s ease-in;
`;

export const Content = styled.div`
  flex: 0 0 60px;
`;

export const Title = styled.h4`
  margin: 4px 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

export const Info = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${Img} {
      transform: scale(1.2);
    }
  }
`;
