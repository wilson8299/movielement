import styled, { css } from "styled-components";
import { Container as CTR, Color, Device } from "@/components/Styles";

export const Wrapper = styled.div`
  padding-top: 63px;
  background-color: ${({ theme }) => theme.bg1};
`;

export const Container = styled(CTR)``;

export const Banner = styled.section`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 70%),
    url(${({ bg }) => bg});
  background-size: cover;
  background-position: top;
`;

export const BannerContainer = styled(CTR)`
  display: flex;
  padding: 50px 0;
`;

export const BannerContent = styled.div`
  flex: 1 1 auto;
`;

export const Content = styled(Container)`
  display: flex;

  @media ${Device.sm} {
    flex-direction: column-reverse;
  }
`;

export const Main = styled.section`
  flex: 1 1 80%;
  padding: 30px 0;
`;

export const Side = styled.section`
  flex: 0 0 260px;
  padding: 30px 0 40px 30px;
`;

export const Title = styled.h2`
  display: block;
  margin: 36px 0 16px 0;
  color: ${({ theme }) => theme.text};

  ${({ side }) =>
    side &&
    css`
      margin: 36px 0 6px 0;
      font-size: 1.3rem;
      font-weight: 550;
    `};
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${(props) => props.ew}, 1fr));
  gap: 20px;

  @media ${Device.sm} {
    grid-template-columns: none;
  }
`;

export const Info = styled.p`
  margin: 0;
  padding: 6px 0 2px 0px;
  font-size: 1.1rem;
`;

export const YtPlayer = styled.div`
  position: relative;
  padding-top: 50%;
`;
