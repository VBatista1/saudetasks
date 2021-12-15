import { MenuButton } from "components/Atoms/MenuButton";
import { MenuHeader } from "components/Molecules/MenuHeader";
import { MenuItem } from "components/Molecules/MenuItem";
import { useState } from "react";
import { MenuContainer, MenuWrapper } from "./styles";

export const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}/>
      <MenuWrapper open={open}>
        <MenuHeader />
        <MenuItem />
      </MenuWrapper>
    </MenuContainer>
  );
};
