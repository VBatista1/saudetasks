import { Divider } from "components/Atoms/Divider";
import { Logo } from "components/Atoms/Logo";
import { MenuHeaderContainer, LogoWrapper } from "./styles";

export const MenuHeader: React.FC = () => {
  return (
    <MenuHeaderContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Divider />
    </MenuHeaderContainer>
  );
};
