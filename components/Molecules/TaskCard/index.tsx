import { Checkbox } from "components/Atoms/Checkbox";
import { TaskCardContainer, CheckboxWrapper } from "./styles";
import {
  useAppDispatch,
} from 'redux/hooks';
import { editTask } from "redux/features/modal/modalSlice";
import { ITask } from "utils/types";
interface TaskCardProps {
  task: ITask;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(editTask({task}));
  };

  return (
      <TaskCardContainer onClick={handleOpenModal}>
        <label>
          <CheckboxWrapper>
            <Checkbox task={task}/>
          </CheckboxWrapper>
          <span>{task.title}</span>
        </label>
      </TaskCardContainer>
  );
};
