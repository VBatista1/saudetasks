import { TaskCard } from "components/Molecules/TaskCard";
import { TaskCardListContainer } from "./styles";
import {
  useAppSelector,
} from 'redux/hooks';
import {
  selectTasks,
} from 'redux/features/tasks/tasksSlice';
import { NoTasks } from "components/Molecules/NoTasks";

export const TaskCardList: React.FC = () => {
  const tasks = useAppSelector(selectTasks);

  const renderTasks = () => {
    if(tasks.length < 1 )
      return <NoTasks />
    return tasks.map((task, index) => (
      <li key={index}>
        <TaskCard task={task}/>
      </li>
    ))
  }

  return (
    <TaskCardListContainer>
      <h2>Daily Tasks</h2>
      {renderTasks()}
    </TaskCardListContainer>
  );
};
