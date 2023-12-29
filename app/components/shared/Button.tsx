export type ButtonTypes = "primary" | "secondary";
export type ButtonProps = {
  type: ButtonTypes;
  text: string;
  onClick?: () => void;
};
const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  const styles =
    type === "primary"
      ? "bg-surface-500 text-surface-50"
      : "bg-transparent text-surface-500 border border-surface-500";

  return (
    <button
      onClick={onClick}
      className={`w-[140px] h-10 rounded-md ${styles} button `}
    >
      {text}
    </button>
  );
};

export default Button;
