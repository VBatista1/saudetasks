import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: var(--dark-blue);
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  :hover {
    cursor: pointer;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;
