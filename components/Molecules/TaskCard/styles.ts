import styled from "styled-components";

export const TaskCardContainer = styled.div`
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  height: 70px;
  max-width: 600px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background: white;
  padding: 10px 20px;

  span {
    :hover {
      cursor: pointer;
    }
  }

  label {
    display: flex;
  }

  :hover {
    cursor: pointer;
    -webkit-transform: scale(1.025);
    -ms-transform: scale(1.025);
    transform: scale(1.025);
  }
`;

export const CheckboxWrapper = styled.div`
  margin-right: 10px;
`;
