import { Checkbox } from "components/Atoms/Checkbox";
import { useState } from "react";
import { TaskCardContainer, CheckboxWrapper } from "./styles";
import { ModalTask } from "components/Organisms/ModalTask";

export interface ITask {
  due_on: string;
  id: number;
  status: string;
  title: string;
  user_id: number;
}

interface TaskCardProps {
  task: ITask;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [openModalTask, setOpenModalTask] = useState<boolean>(false);

  const openModal = () => {
    setOpenModalTask(true);
  };

  const closeModal = () => {
    setOpenModalTask(false);
  };

  

  return (
    <>
      <TaskCardContainer onClick={openModal}>
        <label>
          <CheckboxWrapper>
            <Checkbox task={task}/>
          </CheckboxWrapper>
          <span>{task.title}</span>
        </label>
      </TaskCardContainer>
      <ModalTask open={openModalTask} closeModal={closeModal} variant="edit" task={task}/>
    </>
  );
};
