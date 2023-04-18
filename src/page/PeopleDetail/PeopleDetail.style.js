import styled, { css } from "styled-components";
import { Container as CTR, Color, Device } from "@/components/Styles";

export const Wrapper = styled.div`
  padding-top: 63px;
  background-color: ${({ theme }) => theme.bg1};
`;

export const Content = styled(CTR)`
  display: flex;

  @media ${Device.sm} {
    flex-direction: column;
  }
`;

export const Side = styled.div`
  flex: 0 0 260px;
  padding-right: 50px;

  p {
    margin: 4px 0 0 0;
  }
`;

export const Main = styled.div`
  flex: 1 1 auto;
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export const SocialLink = styled.a`
  display: inline-block;
  margin: 15px 10px 15px 0;

  svg {
    font-size: 2.2rem;
    color: ${Color.primary[300]};
  }
`;

export const Title = styled.div`
  margin: 20px 0 0 0;
`;

export const Biography = styled.p`
  line-height: 20px;
  color: ${Color.general[200]};
  white-space: pre-wrap;
`;

export const ActingWrapper = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 4px;

  h4 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
  }
`;

export const Character = styled.span`
  color: ${Color.general[500]};
`;
