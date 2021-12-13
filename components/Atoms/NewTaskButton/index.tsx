import AddIcon from "public/icons/plus_icon.svg";
import { Button } from "./styles";
import { ModalTask } from "components/Organisms/ModalTask";
import { useState } from "react";

export const NewTaskButton: React.FC = () => {
  const [openModalTask, setOpenModalTask] = useState<boolean>(false);

  const openModal = () => {
    setOpenModalTask(true);
  };

  const closeModal = () => {
    setOpenModalTask(false);
  };

  return (
    <>
      <Button onClick={openModal}>
        <AddIcon />
      </Button>
      <ModalTask open={openModalTask} closeModal={closeModal} variant="new" />
    </>
  );
};
