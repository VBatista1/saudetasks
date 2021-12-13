import styled from "styled-components";
import { device } from "utils/breakpoints";

interface MenuProps {
  open: boolean;
}

export const MenuContainer = styled.div`
  position: relative;
  height: 100%;
  width: fit-content;
`;

export const MenuWrapper = styled.div`
  background-color: var(--dark-blue);
  width: ${(props: MenuProps) => props.open ? '300px': "0px"};
  margin-left: ${(props: MenuProps) => props.open ? '0px': "-200px"};
  height: 100%;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  @media ${device.tablet} {
    display: none;
  }
`;
