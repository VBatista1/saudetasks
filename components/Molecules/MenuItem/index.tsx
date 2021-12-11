import HomeIcon from "public/icons/home_icon.svg";
import { MenuItemContainer } from './styles';

export const MenuItem: React.FC = () => {
  return (
    <MenuItemContainer>
      <HomeIcon height={30} width={30}/>
      <p>Suas tasks</p>
    </MenuItemContainer>
  );
};
