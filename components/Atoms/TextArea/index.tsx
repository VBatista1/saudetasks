import { TextAreaContainer } from "./styles";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({ value, label, onChange, required }) => {
  return (
    <TextAreaContainer>
      <h4>{label}</h4>
      <textarea value={value} onChange={onChange} required/>
    </TextAreaContainer>
  );
};
