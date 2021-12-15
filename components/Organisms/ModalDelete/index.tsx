import { Button } from "components/Atoms/Button";
import { Modal } from "components/Molecules/Modal";
import { useState } from "react";
import { DeleteButton } from "components/Atoms/DeleteButton";
import { toast } from "react-toastify";
import { deleteTask } from "services/tasks";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { closeModal, selectModal } from "redux/features/modal/modalSlice";
import { ContentModal } from "./styles";
import {
  ModalHeader,
  ModalFooter,
} from "components/Organisms/ModalTask/styles";
import LoadingIcon from "public/icons/loading.svg";
import { removeTask } from "redux/features/tasks/tasksSlice";

export const ModalDelete: React.FC = () => {
  const dispatch = useAppDispatch();
  const { task } = useAppSelector(selectModal);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModalDelete = () => {
    setOpen(true);
  };

  const handleCloseModalDelete = () => {
    setLoading(false);
    setOpen(false);
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteTask(task.id);
      toast.success("Task deletada com sucesso");
      dispatch(removeTask(task.id));
      handleCloseModalDelete();
      handleCloseModal();
    } catch (err: any) {
      toast.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      <DeleteButton onClick={handleOpenModalDelete} />
      <Modal open={open} close={handleCloseModalDelete}>
        <ModalHeader>
          <h2>Confirmar</h2>
        </ModalHeader>
        <ContentModal>
          Você realmente deseja deletar essa task? Este processo não poderá ser
          desfeito
        </ContentModal>
        <ModalFooter>
          <Button
            type="button"
            onClick={handleCloseModalDelete}
            color="#FFFFFFFF"
            textColor="#000"
          >
            Cancelar
          </Button>
          <Button type="button" onClick={handleDelete} color="var(--red)">
            {loading ? <LoadingIcon height={30} width={30} /> : "Deletar"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
