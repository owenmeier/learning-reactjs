interface Props {
  children: string;
  onClick: () => void;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
