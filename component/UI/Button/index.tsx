import { ButtonUI } from "./Button.styled";

interface Props {
  label: string;
  onClick?: VoidFunction;
  isDisable?: boolean;
}

const Button: React.FC<Props> = ({ label, onClick, isDisable }) => {
  return <ButtonUI mt={4} onClick={onClick} disabled={isDisable}>{label}</ButtonUI>;
};

export default Button;
