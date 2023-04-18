import styled, { css } from "styled-components";
import { Container as CTR, Color } from "@/components/Styles";

export const Condition = styled.div`
  margin: 0 0 20px 0;
  padding: 16px 10px;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 6px;
`;

export const Title = styled.h3`
  margin: 0 0 12px 0;
  color: ${({ theme }) => theme.text};
`;

export const Divider = styled.hr`
  margin: 30px 0 30px 0;
  border: 0;
  height: 1px;
  background-color: ${Color.general[700]};
`;

export const InnerTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-weight: 300;
`;

export const SortSelectWrapper = styled.div`
  margin: 10px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    height: 40px;
    border-radius: 0 5px 5px 0;
    background: ${Color.general[700]};
    pointer-events: none;
  }

  &:after {
    content: "";
    position: absolute;
    top: 10px;
    right: 22px;
    width: 8px;
    height: 8px;
    border-right: 5px solid white;
    border-bottom: 5px solid white;
    transform: rotate(45deg);
    pointer-events: none;
    transition: 0.25s all ease;
  }
`;

export const Select = styled.select`
  appearance: none;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  color: white;
  background: ${Color.general[700]};
  border: 0;
  border-radius: 5px;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;

  label {
    width: 80px;
    padding-right: 20px;
    color: ${Color.general[400]};
  }

  .react-datepicker__input-container input {
    width: 100%;
    padding: 3px 6px;
    color: ${({ theme }) => theme.text};
    border: 2px solid ${Color.general[700]};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.bg2};
  }

  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
    background-color: ${Color.general[700]};
    color: white;
  }

  .react-datepicker__header {
    background-color: ${Color.general[800]};

    * {
      color: white;
    }
  }

  .react-datepicker__day {
    color: white;

    &:hover {
      background-color: ${Color.general[800]} !important;
    }
  }

  .react-datepicker__day--selected {
    color: white;
    background-color: ${Color.general[800]} !important;
  }

  .react-datepicker__day--in-selecting-range {
    color: white;
    background-color: ${Color.general[500]};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${Color.general[800]};
  }

  .react-datepicker__day--in-range {
    &:not(.react-datepicker__day--in-selecting-range) {
      color: white;
      background-color: ${Color.general[700]};
    }
  }

  .react-datepicker__day--disabled {
    &:hover {
      background-color: ${Color.general[700]} !important;
      cursor: not-allowed;
    }
  }
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GenreLabel = styled.label`
  display: block;
`;

export const Button = styled.div`
  margin: 6px;
  padding: 6px 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  border: 2px solid ${Color.primary[400]};
  border-radius: 30px;

  &:hover {
    background-color: ${Color.primary[400]};
  }
`;

export const GenreCheckBox = styled.input`
  display: none;

  &:checked {
    & + ${Button} {
      background-color: ${Color.primary[400]};
      border: 2px solid ${Color.primary[400]};
    }
  }
`;

export const SliderWrapper = styled.div`
  padding: 20px;
`;

export const ToolTip = styled.span`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100px;
`;

export const Search = styled.button`
  display: block;
  width: 100%;
  padding: 6px 20px;
  margin: 0 auto;
  font-size: 1.6rem;
  border: none;
  color: ${Color.general[100]};
  background-color: ${Color.secondary[700]};
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${Color.secondary[600]};
  }
`;
