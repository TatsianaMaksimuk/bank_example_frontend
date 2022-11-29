import { CSSProperties, FC, FormEventHandler, ReactNode } from "react";

interface FormProps {
  children: ReactNode, /// children are expected to be a series of InlineInputContainers followed by an input component. However component can accept others
  style?: CSSProperties,
  onSubmit: FormEventHandler,
  className?: string,
}

const Form: FC<FormProps> = (props) => {

  const defaultStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    textAlign: 'center',
    width: '100%',
    marginBottom: '1.5rem',
    maxWidth: 890,
  }

  return (
    <form
      style={{...defaultStyle, ...props.style}}
      className={props.className}
      onSubmit={e => {
        e.preventDefault(),
        props.onSubmit(e)
      }}
    >
      {props.children}
    </form>
  )
}

export default Form;