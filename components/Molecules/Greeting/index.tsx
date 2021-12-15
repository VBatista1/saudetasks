import { selectUser } from "redux/features/user/userSlice";
import { GreetingContainer } from "./styles";
import { useAppSelector } from "redux/hooks";

export const Greeting: React.FC = () => {
  const { user } = useAppSelector(selectUser);

  return (
    <GreetingContainer>
      <h2>{user.gender === 'male' ? 'Seja bem-vindo !' : 'Seja bem-vinda !'}</h2>
      <p>{user.name}</p>
    </GreetingContainer>
  );
};
