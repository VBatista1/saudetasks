import { DeleteButtonContainer } from './styles'
import DeleteIcon from "public/icons/delete_icon.svg";

interface DeleteButtonProps {
    onClick: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({onClick}) => {
  return <DeleteButtonContainer type="button" onClick={onClick}><DeleteIcon fill="var(--red)"/></DeleteButtonContainer>;
}