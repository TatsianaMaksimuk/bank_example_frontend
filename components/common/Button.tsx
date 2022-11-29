import { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset",
  stlye?: CSSProperties,
  className?: string,
  onClick?: MouseEventHandler,
  disabled?: boolean,
  disabledText?: String,
  children: ReactNode,
}

const defaultStyle: CSSProperties = {
  backgroundColor: '#0058A7',
  color: '#fafafa',
  padding: ".75rem 1.25rem",
  borderRadius: "0.375rem",
  width: 'fit-content',
  margin: "1.25rem 0"
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button 
      type={props.type || "submit"}
      style={{...defaultStyle, ...props.stlye}}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? (<p>{props.disabledText ? props.disabledText : "Loading.."}</p>) : props.children}
    </button>
  )
}

export default Button;
