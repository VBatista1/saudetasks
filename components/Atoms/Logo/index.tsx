import {  useRouter } from 'next/router';
import { LogoContainer } from './styles';

export const Logo: React.FC = () => {
  const router = useRouter();

  return (
    <LogoContainer onClick={() => router.push("/")}>
      <h1>
        Saúde<span>Tasks</span>
      </h1>
    </LogoContainer>
  );
};
