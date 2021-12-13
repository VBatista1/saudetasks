import { MenuButtonContainer } from "./styles";
import MenuIcon from "public/icons/menu_icon.svg";

interface MenuButtonProps {
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({onClick}) => {
  return (
    <MenuButtonContainer onClick={onClick}>
      <MenuIcon fill="var(--dark-blue)"/>
    </MenuButtonContainer>
  );
};
