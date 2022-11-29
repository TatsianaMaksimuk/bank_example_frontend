import { ChangeEventHandler, CSSProperties, ReactNode, FC } from "react";

interface SelectProps {
  style?: CSSProperties,
  id: string,
  onChange: ChangeEventHandler,
  value: any,
  placeholder?: string,
  children: ReactNode,
}

const defaultStyle: CSSProperties = {
  color: "#000",
  backgroundColor: "#eee",
  fontSize: 18,
  border: "1px solid #d9d9d9",
  paddingRight: 5,
  paddingLeft: 10,
  width: "100%",
  minWidth: 250,
  height: "auto",
  margin: 0,
  borderRadius: 5,
  flex: 1,
}

/* the children of this component are expected to be standard option tags or React components that will render an option tag. */

const Select: FC<SelectProps> = (props) => {
  return (
    <select
      style={{...defaultStyle, ...props.style}}
      id={props.id}
      onChange={props.onChange}
      value={props.value}
    >
      {props.placeholder ? (
        <option value="" disabled>
          {props.placeholder}
        </option>
      ): null}
      {props.children}
    </select>
  )
}

export default Select