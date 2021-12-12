import { UserButton } from "components/Atoms/UserButton";
import { NavbarContainer } from "./styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <UserButton />
    </NavbarContainer>
  );
};
