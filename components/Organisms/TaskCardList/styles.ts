import styled from 'styled-components';

export const TaskCardListContainer = styled.ul`
  list-style-type: none;
  padding: 10px 20px;

  li + li {
    margin-top: 20px;
  }
`;
