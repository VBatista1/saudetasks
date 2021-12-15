import { ITask } from "utils/types";
import { useState } from "react";
import { toast } from "react-toastify";
import { editTask } from "services/tasks";
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
} from "./styles";

interface CheckboxProps {
  task: ITask;
}

export const Checkbox: React.FC<CheckboxProps> = ({task}) => {
  const [checked, setChecked] = useState<boolean>(task.status !== 'pending');

  const handleCheckboxChange = async () => {
    try {
      await editTask({
        id: task.id,
        title: task.title,
        due_on: task.due_on,
        status: checked ? 'pending' : 'completed',
        user_id: task.user_id,
      });
      setChecked(!checked);
    }
    catch(err: any) {
      toast.error(err);
    }
  };

  const handleOnClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  }

  return (
    <CheckboxContainer onClick={handleOnClick}>
      <HiddenCheckbox checked={checked} type="checkbox" onChange={handleCheckboxChange}/>
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};
