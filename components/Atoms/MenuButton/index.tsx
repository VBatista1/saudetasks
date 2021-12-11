import { MenuButtonContainer } from "./styles";
import MenuIcon from "public/icons/menu_icon.svg";

export const MenuButton: React.FC = () => {
  return (
    <MenuButtonContainer>
      <MenuIcon fill="var(--dark-blue)"/>
    </MenuButtonContainer>
  );
};
