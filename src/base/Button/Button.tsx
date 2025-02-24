import './Button.css';

type ButtonProps = {
  type: string;
  text: string;
  disabled?: boolean;
  action?: () => void;
};
export const Button = ({ type, text, disabled, action }: ButtonProps) => {
  return (
    <button className={type} onClick={action} disabled={disabled}>
      {text}
    </button>
  );
};
