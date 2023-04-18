import styled from "styled-components";
import { Container as CTR } from "@/components/Styles";

export const Wrapper = styled.div`
  padding-top: 63px;
  background-color: ${({ theme }) => theme.bg1};
`;

export const Container = styled(CTR)``;

export const Title = styled.h2`
  display: block;
  color: ${({ theme }) => theme.text};
`;

export const PeopleItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 36px;
`;
