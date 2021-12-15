import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: "menu navbar" "menu main";
  grid-template-columns: min-content 3fr;
  grid-template-rows: 60px 1fr;
  height: 100%
`;
