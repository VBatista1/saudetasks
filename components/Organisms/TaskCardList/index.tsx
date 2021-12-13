import { TaskCard } from "components/Molecules/TaskCard";
import { TaskCardListContainer } from "./styles";
import {
  useAppSelector,
} from 'redux/hooks';
import {
  selectTasks,
} from 'redux/features/tasks/tasksSlice';

export const TaskCardList: React.FC = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <TaskCardListContainer>
      {tasks.map((task, index) => (
        <li key={index}>
          <TaskCard task={task}/>
        </li>
      ))}
    </TaskCardListContainer>
  );
};
