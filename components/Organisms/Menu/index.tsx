import { MenuButton } from "components/Atoms/MenuButton";
import { MenuHeader } from "components/Molecules/MenuHeader";
import { MenuItem } from "components/Molecules/MenuItem";
import { MenuContainer, MenuWrapper } from "./styles";

export const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuButton />
      <MenuWrapper>
        <MenuHeader />
        <MenuItem />
      </MenuWrapper>
    </MenuContainer>
  );
};
