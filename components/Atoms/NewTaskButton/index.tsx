import AddIcon from "public/icons/plus_icon.svg";
import { Button } from "./styles";
import {
  useAppDispatch,
} from 'redux/hooks';
import { newTask } from "redux/features/modal/modalSlice";


export const NewTaskButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(newTask());
  };

  return (
    <>
      <Button onClick={handleOpenModal}>
        <AddIcon />
      </Button>
    </>
  );
};
