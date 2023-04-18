import styled from "styled-components";
import { Color, Device } from "@/components/Styles";

export const Wrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  @media ${Device.md} {
    display: block;
  }
`;

export const YtPlayer = styled.div`
  flex: 1 1 auto;
  position: relative;
  padding-top: 50%;
`;

export const TrailerSection = styled.div`
  flex-basis: 380px;
  padding: 10px;
  background-color: ${({ theme }) => theme.bg1};
`;

export const ListTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  margin: 0 0 6px 0;
`;

export const List = styled.div`
  overflow-y: scroll;
  max-height: 560px;

  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 8rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${Color.general[700]};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Color.primary[300]};
    border-radius: 3px;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const Card = styled.div`
  display: flex;
  width: 96%;
  margin: 0;
  padding: 6px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: ${Color.general[800]};
  }
`;

export const Radio = styled.input`
  display: none;

  &:checked {
    & + ${Card} {
      background-color: ${Color.general[800]};
    }
  }
`;

export const ItemImg = styled.img`
  min-width: 120px;
  height: 120px;
  object-fit: cover;
`;

export const ItemContent = styled.div`
  margin: 0;
  padding-left: 16px;
  color: ${({ theme }) => theme.text};

  h4 {
    margin: 6px 0;
  }

  p {
    margin: 5px 0;

    &:last-child {
      color: ${Color.general[400]};
    }
  }
`;
