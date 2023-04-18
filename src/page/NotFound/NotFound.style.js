import styled, { css } from "styled-components";
import { Container as CTR } from "@/components/Styles";

export const Wrapper = styled.div`
  padding-top: 63px;
  background-color: ${({ theme }) => theme.bg1};
`;

export const Container = styled(CTR)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
