import { ButtonContainer } from "./styles";

export interface ButtonProps {
  textColor?: string;
  color?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  textColor,
  color,
  children,
  type,
  onClick,
}) => {
  return (
    <ButtonContainer
      type={type}
      textColor={textColor}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};
