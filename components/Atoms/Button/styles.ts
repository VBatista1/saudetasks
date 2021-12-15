import styled from "styled-components";
import { ButtonProps } from './index';

export const ButtonContainer = styled.button<ButtonProps>`
  height: 40px;
  background: ${(props: ButtonProps) => props.color ? props.color : 'var(--dark-blue)'};
  width: 110px;
  border-radius: 10px;
  color: ${(props: ButtonProps) => props.textColor ? props.textColor : 'var(--white)'};
  font-size: 1.10rem;
  margin: 0 auto;
  margin-top: 10px;
  display: block;
`;
