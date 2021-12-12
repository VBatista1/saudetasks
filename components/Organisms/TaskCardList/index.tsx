import { TaskCard } from "components/Molecules/TaskCard";
import { TaskCardListContainer } from "./styles";

export const TaskCardList: React.FC = () => {
  return (
    <TaskCardListContainer>
      <li>
        <TaskCard />
      </li>
      <li>
        <TaskCard />
      </li>
      <li>
        <TaskCard />
      </li>
      <li>
        <TaskCard />
      </li>
    </TaskCardListContainer>
  );
};
