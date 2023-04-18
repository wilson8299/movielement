import styled from "styled-components";
import { Device } from "@/components/Styles";

export const MovieItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(auto, 340px));
  gap: 20px;

  @media ${Device.sm} {
    margin-top: 20px;
  }
`;
