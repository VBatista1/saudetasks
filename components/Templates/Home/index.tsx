import { Greeting } from "components/Molecules/Greeting";
import { TaskCardList } from "components/Organisms/TaskCardList";
import { ModalTask } from "components/Organisms/ModalTask";
import { NewTaskButton } from "components/Atoms/NewTaskButton";
import { HomeContainer } from "./styles";

export const Home: React.FC = () => {

  return (
    <HomeContainer>
      <Greeting />
      <TaskCardList/>
      <NewTaskButton />
      <ModalTask/>
    </HomeContainer>
  );
};
