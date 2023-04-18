import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "@/components/Styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  box-shadow: inset 0px 0px 800px -15px #000;
  transition: all 0.2s ease-in;
`;

export const More = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 10px 24px;
  margin-top: -100%;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${Color.general[100]};
  background-color: ${Color.secondary[700]};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in;
  z-index: 10;

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${Color.secondary[500]};
  }
`;

export const Card = styled(Link)`
  display: flex;
  position: relative;
  overflow: hidden;
  user-select: none;

  &:hover {
    ${Overlay} {
      opacity: 1;
    }

    ${More} {
      margin-top: 0;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0px -70px 80px -15px #000;
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 10;
`;

export const Title = styled.h4`
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${Color.general[100]};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${Color.general[500]};

  svg {
    font-size: 1.8rem;
    color: ${Color.primary[300]};
  }

  span {
    font-size: 1.2rem;
    color: ${Color.primary[300]};
  }

  * {
    padding-right: 7px;
  }
`;
