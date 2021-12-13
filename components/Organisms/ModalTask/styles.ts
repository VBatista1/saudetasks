import styled from "styled-components";

interface ModalTaskContainerProps {
  open: boolean;
}

export const ModalTaskContainer = styled.div`
  display: ${(props: ModalTaskContainerProps) => props.open ? "block" : "none" };
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 20px;
`;

export const ModalTaskContent = styled.form`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  max-width: 600px;
  border-radius: 15px;
  color: var(--dark-blue);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
