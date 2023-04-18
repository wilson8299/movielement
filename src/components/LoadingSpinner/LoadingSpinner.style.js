import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 8px solid transparent;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: ${rotate} 1s linear infinite;
`;
