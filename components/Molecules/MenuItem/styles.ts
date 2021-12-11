import styled from "styled-components";

export const MenuItemContainer = styled.button`
  display: flex;
  align-items: center;
  background: none;
  width: 100%;
  border: none;
  p {
      font-size: 1.15rem;
    color: var(--white);
  }
  svg {
    margin: 10px 20px;
  }

  :hover {
      cursor: pointer;
      background-color: var(--light-blue)
  }
`;
