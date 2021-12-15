import FelizIcon from "public/icons/feliz_icon.svg";
import { NoTasksContainer } from './styles';

export const NoTasks: React.FC = () => {
  return (
    <NoTasksContainer>
      <p>Wow ! que vazio, clique no botão abaixo para criar uma nova tarefa.</p>
      <FelizIcon fill="var(--light-blue)"/>
    </NoTasksContainer>
  );
};
