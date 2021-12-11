import styled from "styled-components";
import { device } from "utils/breakpoints";

export const MenuContainer = styled.div`
  position: relative;
  height: 100%;
  width: fit-content;
`;

export const MenuWrapper = styled.div`
  background-color: var(--dark-blue);
  width: 300px;
  height: 100%;

  @media ${device.tablet} {
    display: none;
  }
`;
