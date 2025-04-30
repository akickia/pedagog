type FormSectionProps = {
  heading: string;
  text: string;
  onClose?: () => void;
  children?: React.ReactNode;
};
export const FormSection = ({
  heading,
  text,
  onClose,
  children,
}: FormSectionProps) => {
  return (
    <article className="form-section">
      <button className="close secondary" onClick={onClose}>
        X
      </button>
      <h2>{heading}</h2>
      <p>{text}</p>
      {children}
    </article>
  );
};
