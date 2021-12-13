import { ButtonContainer } from "./styles";  

interface ButtonProps {
  type: string;
}

export const Button: React.FC<ButtonProps> = ({children, type}) => {
  return <ButtonContainer type={type}>{children}</ButtonContainer>;
}