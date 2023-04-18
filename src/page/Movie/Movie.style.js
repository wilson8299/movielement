import styled from "styled-components";
import { Container as CTR, Device } from "@/components/Styles";

export const Wrapper = styled.section`
  padding-top: 63px;
  background-color: ${({ theme }) => theme.bg1};
`;

export const Container = styled(CTR)``;

export const Title = styled.h2`
  display: block;
  color: ${({ theme }) => theme.text};
`;

export const Sidebar = styled.div`
  flex: 0 0 260px;
`;

export const MovieItems = styled.div`
  margin-left: 30px;
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(auto, 340px));
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;

  @media ${Device.sm} {
    flex-direction: column;
    ${MovieItems} {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`;
