import { Button } from "components/Atoms/Button";
import { DatePicker } from "components/Atoms/DatePicker";
import { DeleteButton } from "components/Atoms/DeleteButton";
import { TextArea } from "components/Atoms/TextArea";
import { ITask } from "components/Molecules/TaskCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createTask, deleteTask, editTask } from "services/tasks";
import { ModalTaskContainer, ModalTaskContent, ModalHeader } from "./styles";
import LoadingIcon from "public/icons/loading.svg";

const initialTask = {
  due_on: "",
  id: 0,
  status: "",
  title: "",
  user_id: 0,
};

interface ModalTaskProps {
  open: boolean;
  variant: string;
  closeModal: () => void;
  task?: ITask;
}

export const ModalTask: React.FC<ModalTaskProps> = ({
  open,
  closeModal,
  variant,
  task = initialTask,
}) => {
  const [title, setTitle] = useState(task.title);
  const [due_on, setDue_on] = useState(task.due_on);
  const [ loading, setLoading ] = useState(false)
  
  const buttonLabel = variant === "new" ? "Criar Task" : "Salvar Task";

  const handleDue_onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDue_on(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const cleanModal = () => {
    setTitle("");
    setDue_on("");
    setLoading(false);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      if (variant === "new") {
        await createTask(title, due_on);
        toast.success("Task criada com sucesso");
        cleanModal();
        closeModal();
      } else {
        await editTask({
          id: task.id,
          title: title,
          due_on: due_on,
          status: task.status,
          user_id: task.user_id,
        });
        toast.success("Task editada com sucesso");
        cleanModal();
        closeModal();
      }
    } catch (err: any) {
      toast.error(err);
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try{
      await deleteTask(task.id);
      toast.success("Task deletada com sucesso");
      cleanModal();
      closeModal();
    } catch (err: any) {
      toast.error(err);
      setLoading(false);
    }
  }

  return (
    <ModalTaskContainer open={open} onClick={closeModal}>
      <ModalTaskContent
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.stopPropagation();
        }}
        onSubmit={handleSubmit}
      >
        <ModalHeader>
          <h2>{variant === "new" ? "Criar Nova Task" : "Editar Task"}</h2>
          {variant !== "new" ? <DeleteButton onClick={handleDelete}/> : null}
        </ModalHeader>
        <TextArea
          label="Descrição"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <DatePicker
          label="Data de Término"
          value={due_on.toString().slice(0, 23)}
          onChange={handleDue_onChange}
          required
        />
        <Button type="submit">
          {loading ? <LoadingIcon height={30} width={30}/> : buttonLabel}
        </Button>
      </ModalTaskContent>
    </ModalTaskContainer>
  );
};
