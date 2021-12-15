import { Button } from "components/Atoms/Button";
import { DatePicker } from "components/Atoms/DatePicker";
import { TextArea } from "components/Atoms/TextArea";
import { useState } from "react";
import { toast } from "react-toastify";
import { createTask, editTask } from "services/tasks";
import { ModalHeader } from "./styles";
import LoadingIcon from "public/icons/loading.svg";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import {
  closeModal,
  selectModal,
  updateTask,
} from "redux/features/modal/modalSlice";
import { Modal } from "components/Molecules/Modal";
import { ModalDelete } from "../ModalDelete";
import { addTask, modifyTask } from "redux/features/tasks/tasksSlice";

export const ModalTask: React.FC = () => {
  const dispatch = useAppDispatch();
  const { variant, task, open } = useAppSelector(selectModal);
  const [loading, setLoading] = useState<boolean>(false);

  const buttonLabel = variant === "new" ? "Criar Task" : "Salvar Task";

  const handleDue_onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTask({ due_on: event.target.value }));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateTask({ title: event.target.value }));
  };

  const handleCloseModal = () => {
    setLoading(false);
    dispatch(closeModal());
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      setLoading(true);
      if (variant === "new") {
        const response = await createTask(task.title, task.due_on);
        dispatch(addTask(response.data));
        toast.success("Task criada com sucesso");
        handleCloseModal();
      } else {
        const newTask = {
          id: task.id,
          title: task.title,
          due_on: task.due_on,
          status: task.status,
          user_id: task.user_id,
        }
        await editTask(newTask);
        dispatch(modifyTask(newTask));
        toast.success("Task editada com sucesso");
        handleCloseModal();
      }
    } catch (err: any) {
      toast.error(err);
      setLoading(false);
    }
  };

  

  return (
    <Modal open={open} close={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <ModalHeader>
          <h2>{variant === "new" ? "Criar Nova Task" : "Editar Task"}</h2>
          {variant !== "new" ? <ModalDelete/> : null}
        </ModalHeader>
        <TextArea
          label="Descrição"
          value={task.title}
          onChange={handleTitleChange}
          required
        />
        <DatePicker
          label="Data de Término"
          value={task.due_on.toString().slice(0, 23)}
          onChange={handleDue_onChange}
          required
        />
        <Button type="submit">
          {loading ? <LoadingIcon height={30} width={30} /> : buttonLabel}
        </Button>
      </form>
    </Modal>
  );
};
