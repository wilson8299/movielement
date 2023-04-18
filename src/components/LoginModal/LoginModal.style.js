import styled from "styled-components";
import { Color } from "@/components/Styles";
import modalBg from "@/assets/img/modal-bg.jpg";

export const ModalStyle = styled.div`
  width: 450px;
  margin: 2rem;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg1};
  border-radius: 0.25rem;
  box-shadow: 0px 0px 10px rgba(96, 179, 241, 0.2);
`;

export const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #212b3299;
  /* background-image: url(${modalBg});
  background-size: cover;
  background-repeat: no-repeat; */
`;

export const Title = styled.div`
  svg {
    display: block;
    margin: 0 auto;
    font-size: 2rem;
    color: ${Color.primary[300]};
  }

  h3 {
    margin: 6px 0 14px 0;
    font-size: 2rem;
    text-align: center;
    color: ${Color.primary[300]};
  }
`;

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

export const Operate = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-right: 10px;
    font-size: 1.3rem;
    font-weight: 500;
    border: none;
    background: transparent;
    color: ${Color.general[600]};
    cursor: pointer;

    &:hover {
      color: ${Color.general[500]};
    }
  }

  input {
    padding: 5px 8px;
    font-size: 1.3rem;
    font-weight: 500;
    background: ${Color.secondary[700]};
    border: 0;
    border-radius: 6px;
    color: ${Color.general[100]};
    cursor: pointer;

    &:hover {
      background: ${Color.secondary[500]};
    }

    &:disabled {
      background-color: ${Color.general[500]};
    }
  }
`;
