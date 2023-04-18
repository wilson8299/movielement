import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { Color } from "@/components/Styles";

export const Paginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 55px 0;

  li a {
    border-radius: 4px;
    padding: 2px 6px;
    margin: 0 3px;
    border: gray 1px solid;
    cursor: pointer;
  }

  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }

  li.active a {
    background-color: ${Color.primary[400]};
    border-color: transparent;
    color: white;
    min-width: 32px;
  }

  li.disabled a {
    color: grey;
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
