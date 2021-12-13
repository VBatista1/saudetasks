import { DatePickerContainer } from "./styles";

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  label,
  onChange,
  required
}) => {
  return (
    <DatePickerContainer>
      <h4>{label}</h4>
      <input
        type="datetime-local"
        value={value}
        onChange={onChange}
        placeholder="Heya"
        required
      />
    </DatePickerContainer>
  );
};
