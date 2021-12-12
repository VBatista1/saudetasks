import AvatarIcon from "public/icons/avatar_icon.svg";
import { UserButtonContainer } from './styles';

export const UserButton: React.FC = () => {
  return <UserButtonContainer><AvatarIcon fill="var(--dark-blue)"/></UserButtonContainer>;
}