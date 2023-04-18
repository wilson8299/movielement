import styled from "styled-components";
import { Color } from "@/components/Styles";

export const Wrapper = styled.div`
  padding: 6px 0;
  color: ${Color.general[400]};
  background-color: ${({ theme }) => theme.bg2};
  text-align: center;
`;
