import styled, { css } from "styled-components";
import { Color } from "@/components/Styles";
import { SwiperSlide } from "swiper/react";

export const Wrap = styled.div`
  position: relative;
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  /* display: flex;
  justify-content: center; */
`;

export const NavigationButton = styled.a`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  &[disabled] {
    polyline {
      stroke: ${Color.general[700]};
    }
  }

  &:hover {
    polyline {
      stroke: ${Color.primary[400]};
    }
  }

  ${({ next }) =>
    next &&
    css`
      right: 0;
      margin-right: -45px;
    `};

  ${({ prev }) =>
    prev &&
    css`
      left: 0;
      margin-left: -45px;
    `};

  svg {
    font-size: 2rem;

    polyline {
      stroke: ${Color.primary[300]};
      stroke-width: 4;
    }
  }
`;
