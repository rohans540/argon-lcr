

type ButtonProps = {
    btnType?: "button" | "submit" | "reset";
    title: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ btnType, title, handleClick, className, disabled }) => {
  return (
    <button onClick={handleClick} className={`cursor-pointer ${className || ""}`} disabled={disabled} type={btnType}>
        {title}
    </button>
  )
}

export default Button