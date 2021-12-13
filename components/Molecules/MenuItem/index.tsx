import HomeIcon from "public/icons/home_icon.svg";
import { MenuItemContainer } from './styles';
import {  useRouter } from 'next/router';

export const MenuItem: React.FC = () => {
  const router = useRouter();
  
  return (
    <MenuItemContainer onClick={() => router.push("/")}> 
      <HomeIcon height={30} width={30}/>
      <p>Suas tasks</p>
    </MenuItemContainer>
  );
};
