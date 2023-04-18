import styled from "styled-components";
import { Color } from "@/components/Styles";

export const Field = styled.div`
  margin: 20px 0;
  position: relative;
  text-align: left;
`;

export const Input = styled.input`
  padding: 6px 8px;
  width: 100%;
  height: 40px;
  color: ${Color.general[100]};
  border: 0;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 3px;

  &:focus {
    border: 1px solid ${Color.primary[300]};
  }

  &:disabled {
    color: ${Color.general[500]};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
`;

export const ErrorMessage = styled.p`
  margin: 6px 0 0 0;
  color: ${Color.error};
`;

export const Submit = styled.input`
  display: block;
  margin-left: auto;
  padding: 6px 10px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  background-color: ${Color.secondary[600]};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${Color.secondary[500]};
  }
`;
