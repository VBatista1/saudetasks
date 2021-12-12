import styled from "styled-components";

export const MenuItemContainer = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  p {
      font-size: 1.15rem;
    color: var(--white);
  }
  svg {
    margin: 10px 20px;
  }

  :hover {
      background-color: var(--light-blue)
  }
`;
