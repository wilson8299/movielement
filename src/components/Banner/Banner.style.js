import styled, { css, keyframes } from "styled-components";
import { Container as CTR, Color, Device } from "@/components/Styles";
import { SwiperSlide } from "swiper/react";

export const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  padding-top: 63px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 70%),
    url(${({ bg }) => bg});
  background-size: cover;
  background-position: top;
  cursor: default;
  height: auto;
  /* rgba(149, 94, 6, 0.6) 100% */
`;

export const Container = styled(CTR)`
  display: flex;
  flex-wrap: nowrap;
  padding: 100px 0;
`;

export const Img = styled.img`
  flex: 1 1 20%;
  width: 100%;
  height: 450px;

  @media ${Device.sm} {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  flex: 1 1 80%;
  margin: 10px 50px 10px 0;

  @media ${Device.sm} {
    margin: 10px 0;
  }
`;

export const Tags = styled.div`
  span {
    padding: 3px 6px;
    margin-right: 5px;
    background-color: ${Color.primary[500]};
    border-radius: 3px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  margin: 20px 0;
  animation: ${({ active }) =>
    active &&
    css`
      ${rotate} 2s linear
    `};
`;

export const Date = styled.p`
  font-size: 1.5rem;
  color: ${Color.general[500]};
`;

export const Overview = styled.p`
  font-size: 1.2rem;
  max-width: 650px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${Color.general[500]};

  svg {
    font-size: 2rem;
    color: ${Color.primary[300]};
  }

  span {
    font-size: 1.4rem;
    color: ${Color.primary[300]};
  }

  * {
    padding-right: 7px;
  }
`;

export const More = styled.a`
  display: block;
  width: fit-content;
  margin-top: 30px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease-in;
  text-decoration: none;
  background-color: ${Color.secondary[700]};
  border-radius: 20px;

  &:hover {
    color: ${({ theme }) => theme.text};
    background-color: ${Color.secondary[500]};
  }
`;

// export const More = styled.a`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   padding: 0.5rem 1rem;
//   cursor: pointer;
//   text-align: center;
//   font-size: 1.2rem;
//   color: ${({ theme }) => theme.text};
//   transition: all 0.1s ease-in;
//   text-decoration: none;
//   background-color: ${Color.secondary[700]};
//   border-radius: 20px;

//   &:hover {
//     color: ${({ theme }) => theme.text};
//     background-color: ${Color.secondary[500]};
//   }
// `;

export const PaginationButton = styled.div`
  position: absolute;
  left: 0;
  bottom: 10px;
  text-align: center;
  z-index: 10;

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: ${Color.primary[300]};
    opacity: 0.6;
  }

  .swiper-pagination-bullet-active {
    width: 30px;
    height: 12px;
    border-radius: 5px;
    opacity: 1;
  }
`;
