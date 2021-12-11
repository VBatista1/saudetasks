import { MenuHeader } from "components/Molecules/MenuHeader";
import { MenuItem } from "components/Molecules/MenuItem";
import { MenuContainer } from "./styles";

export const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <MenuHeader />
      <MenuItem />
    </MenuContainer>
  );
};
