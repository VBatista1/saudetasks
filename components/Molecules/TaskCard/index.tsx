import { Checkbox } from "components/Atoms/Checkbox";
import { useState } from "react";
import { TaskCardContainer, CheckboxWrapper } from "./styles";

export const TaskCard: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <TaskCardContainer>
      <label>
        <CheckboxWrapper>
          <Checkbox checked={checked} onChange={handleCheckboxChange} />
        </CheckboxWrapper>
        <span>
          Adsuesco suffragium comptus defleo ipsam statua capillus talis culpa
          urbs.
        </span>
      </label>
    </TaskCardContainer>
  );
};
