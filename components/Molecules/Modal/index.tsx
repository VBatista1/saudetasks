import { ModalTaskContainer, ModalTaskContent } from "./styles";

interface ModalProps {
    open: boolean
    close: () => void
}
  
export const Modal: React.FC<ModalProps> = ({ open, close, children }) => {

    const handleCloseModal = () => {
        close();
      };

  return (
    <ModalTaskContainer open={open} onClick={handleCloseModal}>
      <ModalTaskContent
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.stopPropagation();
        }}
      >
        {children}
      </ModalTaskContent>
    </ModalTaskContainer>
  );
};
