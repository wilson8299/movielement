import styled from "styled-components";
import { Size } from "./Base";

export const Container = styled.div`
  width: ${(props) =>
    (props.sm && Size.sm) ||
    (props.md && Size.md) ||
    (props.lg && Size.lg) ||
    (props.fluid && Size.fluid) ||
    Size.lg};

  max-width: calc(100% - 100px);
  /* padding: 0 1rem; */
  margin: 0 auto;
`;
